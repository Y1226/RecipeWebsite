import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipes } from 'src/Classes/Recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  constructor(public httpclient:HttpClient) { }  
  baseUrl:string = 'http://localhost:8520/recipes/'

  recipeArray: Array<Recipes> = new Array<Recipes>()
  arrayOfRows:Array<string> = new Array<string>()

  getAll():Observable<Array<Recipes>> {
      return this.httpclient.get<Array<Recipes>>(`${this.baseUrl}getAll`)
  }

  getByRecipeName(recipeName:string):Observable<Recipes> {
    return this.httpclient.get<Recipes>(`${this.baseUrl}getByRecipeName/${recipeName}`)
  }

  getByUserName(userName:string):Observable<Recipes> {
    return this.httpclient.get<Recipes>(`${this.baseUrl}getByUserName/${userName}`)
  }

  addRecipe(rcp:Recipes):Observable<Recipes> {
      return this.httpclient.post<Recipes>(`${this.baseUrl}addRecipe`,rcp)
  }

  deleteRecipe(recipeName:string, userName:string):Observable<Recipes> {
    return this.httpclient.delete<Recipes>(`${this.baseUrl}deleteRecipe/${recipeName}/${userName}`)
  }
}
