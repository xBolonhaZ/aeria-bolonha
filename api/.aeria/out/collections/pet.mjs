import { extendCollection,defineCollection,get,getAll,insert,remove } from "aeria"
export const pet = defineCollection({description: {$id: "pet",properties: {name: {type: "string"},owner: {$ref: "person"},age: {type: "number"},type: {enum: ["dog","priquito","cat"]}},presets: ["crud"],indexes: ["name","age"]},functions: {get,getAll,insert,remove},exposedFunctions: {get: true,getAll: true,insert: true,remove: true}})
export const extendPetCollection = (collection) => extendCollection(pet,collection)
