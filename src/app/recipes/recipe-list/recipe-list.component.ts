import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', "This is simply a test", "https://s23209.pcdn.co/wp-content/uploads/2022/10/220905_DD_Sheet-Pan-Chx-Stuffing_222-360x540.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
