import { Collection,SchemaWithId,ExtendCollection,Context,get,getAll,insert,remove } from "aeria"
export declare type petCollection = {description: {$id: "pet",properties: {name: {type: "string"},owner: {$ref: "person"},age: {type: "number"},type: {enum: ["dog","priquito","cat"]}},presets: ["crud"],indexes: ["name","age"]},functions: {get: typeof get,getAll: typeof getAll,insert: typeof insert,remove: typeof remove},exposedFunctions: {get: true,getAll: true,insert: true,remove: true}}
export declare const pet: petCollection & {item: SchemaWithId<petCollection["description"]>}
export declare type Pet = SchemaWithId<typeof pet.description>
export declare const extendPetCollection: <
          const TCollection extends {
            [P in Exclude<keyof Collection, "functions">] ? : Partial <Collection[P]>
          } &{
            functions?: {
              [F: string]: (payload: any, context: Context<typeof pet["description"]>) => unknown
            }
          }>(collection: TCollection) => ExtendCollection<typeof pet,TCollection>
