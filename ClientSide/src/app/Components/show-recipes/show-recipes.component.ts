import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipes } from 'src/Classes/Recipes';
import { RecipeServiceService } from 'src/Services/Recipes/recipe-service.service';
import { UserServiceService } from 'src/Services/Users/user-service.service';

@Component({
  selector: 'app-show-recipes',
  templateUrl: './show-recipes.component.html',
  styleUrls: ['./show-recipes.component.css']
})
export class ShowRecipesComponent implements OnInit {


  constructor(public recipeService: RecipeServiceService, public userService: UserServiceService, public router: Router) { }

  chosenRecipe: Recipes = new Recipes()
  RecipeArr: Array<Recipes> = new Array<Recipes>();
  arrayOfRows: Array<string> = this.recipeService.arrayOfRows

  ngOnInit(): void {
    // debugger
    this.recipeService.getAll().subscribe(x => this.RecipeArr = x)
  }

  showDetails(i: Recipes) {
    this.chosenRecipe = i
  }

  deleteRecipe(i: Recipes) {
    // debugger
    if (this.userService.currentUser.fname == i.userName) {
      this.recipeService.deleteRecipe(i.name!, i.userName!).subscribe(x => { x; debugger })
      alert(`${i.name} is going to be deleted.`)
      this.ngOnInit();
    }
    else
      alert('Permission Denied, Make sure you are in the correct account.')
  }
}
