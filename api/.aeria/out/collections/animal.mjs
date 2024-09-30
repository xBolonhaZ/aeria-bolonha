import { extendCollection,defineCollection,get,getAll,insert,remove } from "aeria"
export const animal = defineCollection({description: {$id: "animal",properties: {name: {type: "string"},owner: {$ref: "person"},age: {type: "number"},type: {enum: ["dog","priquito","cat"]}},icon: "paw-print",presets: ["crud"]},functions: {get,getAll,insert,remove},exposedFunctions: {get: true,getAll: true,insert: true,remove: true}})
export const extendanimalCollection = (collection) => extendCollection(animal,collection)
