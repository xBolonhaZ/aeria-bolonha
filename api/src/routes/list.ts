import { ACError, createRouter, endpointErrorSchema, HTTPStatus, Result, resultSchema } from 'aeria';
export const listRouter=createRouter ();

listRouter.GET('/checkins', async (context) => {
  const { document } = context.request.query;  // Obtém o CPF/CNPJ da query string

  if (!document) {
    return context.error(HTTPStatus.BadRequest,{code:ACError.MalformedInput});
  }

  // Realiza a busca de check-ins com base no CPF/CNPJ
  const { error:PersonError, result: Person } = await context.collections.person.functions.get({
    filters: { document:document }  // Supondo que o documento está na coleção Person
  });
  if (PersonError) {
    return context.error(HTTPStatus.NotFound,{code:ACError.ResourceNotFound});
  }

  const { error:AnimalError, result: Animal } = await context.collections.animal.functions.get({
    filters: { owner:Person._id  }  // Supondo que o documento está na coleção Person
  });

  if (AnimalError) {
    return context.error(HTTPStatus.NotFound,{code:ACError.ResourceNotFound});
  }

  const { error:DocError, result: checkins } = await context.collections.checkin.functions.getAll({
    filters: { animal:Animal._id  }  // Supondo que o documento está na coleção Person
  });

  if (DocError) {
    return context.error(HTTPStatus.NotFound,{code:ACError.ResourceNotFound});
  }

  return Result.result( checkins );

},{query:{
    type:'object',
    properties:{
      document:{
        type: 'string',
      }
    }
  },
  response:[
    endpointErrorSchema({
      httpStatus:[
        HTTPStatus.BadRequest, 
        HTTPStatus.Forbidden, 
        HTTPStatus.NotFound,
      ], code:[
        ACError.OwnershipError,
        ACError.ResourceNotFound,
        ACError.MalformedInput
      ]
    }),
    resultSchema({
      type: 'array',
      items:{
        type: 'object',
        $ref: 'checkin'
      }
    })
  ]
});