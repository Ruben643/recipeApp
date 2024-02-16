import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id:'r1',
      title: 'Scnitzel',
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/220px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients: ['French Fries','Pork Meat','Salad']
    },
    {
      id:'r2',
      title: 'Spaghetti',
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/2/2a/Spaghetti_al_Pomodoro.JPG',
      ingredients: ['Spaghetti','Meat','Tomatoes']
    }
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return{
      ...this.recipes.find(recipes=>{
        return recipes.id === recipeId;
      })!
      
    }
  }
}
