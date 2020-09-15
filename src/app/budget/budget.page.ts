import { Component, OnInit } from '@angular/core';
import { BudgetItem, UpdateEvent } from '../shared/budget-item.model';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.page.html',
  styleUrls: ['./budget.page.scss'],
})
export class BudgetPage {

  public budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget = 0;
  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }
  deleteItem(item: BudgetItem) {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }
  updateItem(updateEvent: UpdateEvent) {
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] =
      updateEvent.new;

    // update the total budget
    this.totalBudget = this.budgetItems.reduce((a, b) => a + (b.amount || 0), 0);
  }

}
