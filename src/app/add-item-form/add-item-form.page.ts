import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from '../shared/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.page.html',
  styleUrls: ['./add-item-form.page.scss'],
})
export class AddItemFormPage implements OnInit {
  @Input() item: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<
    BudgetItem
  >();

  isNewItem: boolean;
  constructor() {}

  ngOnInit() {
    // if item has a value
    if (this.item) {
      // this means that an existing item object was passed into this component
      // therefore this is not a new item
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', null);
    }
  }
  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
