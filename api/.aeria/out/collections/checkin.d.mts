import { Collection,SchemaWithId,ExtendCollection,Context,get,getAll,insert,remove } from "aeria"
export declare type checkinCollection = {description: {$id: "checkin",properties: {animal: {$ref: "animal"},weight: {type: "integer"},temperature: {type: "integer"},type: {enum: ["Routine","Emergency"]},reason: {type: "string"}},icon: "calendar-check",presets: ["crud"]},functions: {get: typeof get,getAll: typeof getAll,insert: typeof insert,remove: typeof remove},exposedFunctions: {get: true,getAll: true,insert: true,remove: true}}
export declare const checkin: checkinCollection & {item: SchemaWithId<checkinCollection["description"]>}
export declare type Checkin = SchemaWithId<typeof checkin.description>
export declare const extendCheckinCollection: <
          const TCollection extends {
            [P in Exclude<keyof Collection, "functions">] ? : Partial <Collection[P]>
          } &{
            functions?: {
              [F: string]: (payload: any, context: Context<typeof checkin["description"]>) => unknown
            }
          }>(collection: TCollection) => ExtendCollection<typeof checkin,TCollection>
