import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('dsadsa', 'dhdhusahudsahud', 'http://thumbs3.ebaystatic.com/d/l225/m/mL6A12Ltbbdgn_1tF0HVE8A.jpg', []),
    new Recipe('321321332y', '434', 'http://thumbs3.ebaystatic.com/d/l225/m/mL6A12Ltbbdgn_1tF0HVE8A.jpg', [])
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipe = new Recipe('Dummy', 'Dummy', 'http://thumbs3.ebaystatic.com/d/l225/m/mL6A12Ltbbdgn_1tF0HVE8A.jpg', [])


  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
