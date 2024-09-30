import { ACError, createRouter, endpointErrorSchema, HTTPStatus, Result, resultSchema } from 'aeria';
export const listRouter=createRouter ();

listRouter.GET('/checkins', async (context) => {
  const { document } = context.request.query;  // Obtém o CPF/CNPJ da query string

  if (!document) {
    return context.error(HTTPStatus.BadRequest,{code:ACError.MalformedInput});
  }

  // Realiza a busca de check-ins com base no CPF/CNPJ
  const { error:personError, result: person } = await context.collections.person.functions.get({
    filters: { document:document }  // Supondo que o documento está na coleção person
  });
  if (personError) {
    return context.error(HTTPStatus.NotFound,{code:ACError.ResourceNotFound});
  }

  const { error:animalError, result: animal } = await context.collections.animal.functions.get({
    filters: { owner:person._id  }  // Supondo que o documento está na coleção person
  });

  if (animalError) {
    return context.error(HTTPStatus.NotFound,{code:ACError.ResourceNotFound});
  }

  const { error:docError, result: checkins } = await context.collections.checkin.functions.getAll({
    filters: { animal:animal._id  }  // Supondo que o documento está na coleção person
  });

  if (docError) {
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