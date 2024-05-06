import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './Components/nav/nav.component';
import { ShowRecipesComponent } from './Components/show-recipes/show-recipes.component';
import { AddRecipeComponent } from './Components/add-recipe/add-recipe.component'
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { PipePipe } from './Pipe/pipe.pipe';
import { DirectiveDirective } from './Directive/directive.directive';
// import { NavComponent } from './nav/nav.component';

@NgModule({
  //שמות המחלקות של כל הקומפוננטות
  declarations: [
    AppComponent,
    NavComponent,
    ShowRecipesComponent,
    AddRecipeComponent,
    LoginComponent,
    PipePipe,
    DirectiveDirective,
    // NavComponent
  ],
  //שמות הספריות החיצוניות שיבאנו לפרויקט
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  //כל הסרוויסים שנגדיר
  providers: [],
  //שם המחלקה של הקומפוננטה שרצה ראשונה
  bootstrap: [AppComponent]
})
export class AppModule { }
