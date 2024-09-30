import { extendCollection,defineCollection,get,getAll,insert,remove } from "aeria"
export const geolocation = defineCollection({description: {$id: "geolocation",properties: {country: {type: "string"},state: {type: "string"},district: {type: "string"},street: {type: "string"},number: {type: "string"},complement: {type: "string"},zipcode: {type: "string",mask: ["##.###-###"]}},presets: ["crud"]},functions: {get,getAll,insert,remove},exposedFunctions: {get: true,getAll: true,insert: true,remove: true}})
export const extendGeolocationCollection = (collection) => extendCollection(geolocation,collection)
