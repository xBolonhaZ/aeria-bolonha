import { extendCollection,defineCollection,get,getAll,insert,remove } from "aeria"
export const checkin = defineCollection({description: {$id: "checkin",properties: {animal: {$ref: "animal"},weight: {type: "integer"},temperature: {type: "integer"},type: {enum: ["Routine","Emergency"]},reason: {type: "string"}},icon: "calendar-check",presets: ["crud"]},functions: {get,getAll,insert,remove},exposedFunctions: {get: true,getAll: true,insert: true,remove: true}})
export const extendCheckinCollection = (collection) => extendCollection(checkin,collection)
