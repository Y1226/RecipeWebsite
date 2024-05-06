import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingredient } from 'src/Classes/Ingredient';
import { Recipes } from 'src/Classes/Recipes';
import { RecipeServiceService } from 'src/Services/Recipes/recipe-service.service';
import { UserServiceService } from 'src/Services/Users/user-service.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

  constructor(public recipeService:RecipeServiceService, public userService:UserServiceService,public router:Router) {}

  counter = 1;
  ingredientArr:Array<Ingredient> = new Array<Ingredient>()
  
  // amountArr:Array<string> = new Array<string>()
  myForm: FormGroup = new FormGroup({
    "name": new FormControl(""),
    "description": new FormControl(""),
    "level": new FormControl(""),
    "time": new FormControl(),
    "yields": new FormControl(""),
    "instructions": new FormControl(""),
    // "userName": new FormControl(""),
    // "ingredients": new FormControl("")
  })

  // IngredientForm: FormGroup = new FormGroup({
  //   "ingredient": new FormControl(""),
  //   "amount": new FormControl(""),
  // })

  ngOnInit(){
    console.log(this.userService.currentUser);
    
  }

  getName() {
    debugger
    return this.myForm.controls['name'].value
  }
  getDescription() {
    return this.myForm.controls['description'].value
  }
  getLevel() {
    return this.myForm.controls['level'].value
  }
  getTime () {
    return this.myForm.controls['time'].value
  }
  getYields () {
    return this.myForm.controls['yields'].value
  }
  getInstructions () {
    return this.myForm.controls['instructions'].value
  }
  // getUserName () {
  //   return this.myForm.controls['userName']
  // }
  // getIngredients () {
  //   return this.myForm.controls['ingredients']
  // }

  addRecipe() {
    
    debugger
    this.recipeService.addRecipe(new Recipes("",this.getName(),this.getDescription(),this.getLevel(),this.getTime(),this.getYields(),this.getInstructions().split("\n"),this.userService.currentUser.fname,this.ingredientArr)).subscribe(x =>
      {
      // var postText = this.getInstructions().split("\n")
      // this.recipeService.arrayOfRows = postText;
    debugger
    this.router.navigate(['../showRecipe'])}
      )
  }
  addIngredient() {
    
    let a = document.getElementById("addedInput")

    let newIngredient = document.createElement('input')
    newIngredient.setAttribute('type','text')
    newIngredient.setAttribute('placeholder','Ingredient')
    // newIngredient.setAttribute('formControlName','ingredient')
    newIngredient.setAttribute('id',`${this.counter}`)
    newIngredient.addEventListener('blur',()=>this.addIng(event))

    let newAmount = document.createElement('input')
    newAmount.setAttribute('type','text')
    newAmount.setAttribute('placeholder','Amount')
    // newIngredient.setAttribute('formControlName','amount')
    newAmount.setAttribute('id',`${this.counter++}`)
    newAmount.addEventListener('blur',()=>this.addAmount(event))

    a?.appendChild(newIngredient)
    a?.appendChild(newAmount)
    a?.appendChild(document.createElement('br'))
  }

  addIng(val:any) {
    debugger
    if(this.ingredientArr[val.target.id] == undefined){
      this.ingredientArr[val.target.id] = new Ingredient()
    }
    this.ingredientArr[val.target.id].ingredient = val.target.value
    // alert(val.target.value)  
  }
  addAmount(val:any) {
    if(this.ingredientArr[val.target.id] == undefined){
      this.ingredientArr[val.target.id] = new Ingredient()
    }
    this.ingredientArr[val.target.id].amount = val.target.value
  }
}
