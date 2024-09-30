import { extendCollection,defineCollection,get,getAll,insert,remove } from "aeria"
export const person = defineCollection({description: {$id: "person",properties: {name: {type: "string"},document: {type: "string",mask: ["###.###.###-##"]},email: {type: "string"},phone: {type: "string",mask: ["(##) #####-####"]},type: {enum: ["customer"]},ie: {type: "integer"},adress: {$ref: "geolocation",inline: true}},presets: ["crud"]},functions: {get,getAll,insert,remove},exposedFunctions: {get: true,getAll: true,insert: true,remove: true}})
export const extendpersonCollection = (collection) => extendCollection(person,collection)
