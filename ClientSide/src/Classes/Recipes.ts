import { Ingredient } from "./Ingredient";

export class Recipes {
    constructor(public _id?:string, public name?:string, public description?:string, public level?:string, public time?:string, public yields?:string, public instructions?:Array<string>, public userName?:string, public ingredients?:Array<Ingredient>) {
        
    }
}