import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './Components/add-recipe/add-recipe.component';
import { LoginComponent } from './Components/login/login.component';
import { NavComponent } from './Components/nav/nav.component';
import { ShowRecipesComponent } from './Components/show-recipes/show-recipes.component';

const routes: Routes = [
  {path:"", component: NavComponent, children: [
    {path: "showRecipe", component: ShowRecipesComponent},
    {path: "addRecipe", component: AddRecipeComponent},
    {path:"", component: LoginComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
