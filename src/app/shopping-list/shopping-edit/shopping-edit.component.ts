import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", { static: false }) nameInputRef: ElementRef;
  @ViewChild("amountInput", { static: false }) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientDelete = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  onAddItem() {
    this.ingredientAdded.emit(
      new Ingredient(
        this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.value
      )
    );
  }

  onDeleteIngredient() {
    this.ingredientDelete.emit();
  }
}
