import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
  ];
  selectedIngredient: Ingredient;

  constructor() {}

  ngOnInit() {}

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  onIngredientSelected(selectedIngredient: Ingredient) {
    this.selectedIngredient = selectedIngredient;
    console.log(this.selectedIngredient);
  }

  onDeleteIngredient() {
    console.log("In delete method..." + this.selectedIngredient);
    this.ingredients = this.ingredients.filter(
      (ingredient) =>
        ingredient.name !== this.selectedIngredient.name &&
        ingredient.amount !== this.selectedIngredient.amount
    );
  }
}
