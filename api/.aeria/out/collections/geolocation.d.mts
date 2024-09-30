import { Collection,SchemaWithId,ExtendCollection,Context,get,getAll,insert,remove } from "aeria"
export declare type geolocationCollection = {description: {$id: "geolocation",properties: {country: {type: "string"},state: {type: "string"},district: {type: "string"},street: {type: "string"},number: {type: "string"},complement: {type: "string"},zipcode: {type: "string",mask: ["##.###-###"]}},presets: ["crud"]},functions: {get: typeof get,getAll: typeof getAll,insert: typeof insert,remove: typeof remove},exposedFunctions: {get: true,getAll: true,insert: true,remove: true}}
export declare const geolocation: geolocationCollection & {item: SchemaWithId<geolocationCollection["description"]>}
export declare type Geolocation = SchemaWithId<typeof geolocation.description>
export declare const extendGeolocationCollection: <
          const TCollection extends {
            [P in Exclude<keyof Collection, "functions">] ? : Partial <Collection[P]>
          } &{
            functions?: {
              [F: string]: (payload: any, context: Context<typeof geolocation["description"]>) => unknown
            }
          }>(collection: TCollection) => ExtendCollection<typeof geolocation,TCollection>
