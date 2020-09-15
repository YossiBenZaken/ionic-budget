import { BudgetItemListPage } from './../budget-item-list/budget-item-list.page';
import { AddItemFormPage } from './../add-item-form/add-item-form.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudgetPageRoutingModule } from './budget-routing.module';

import { BudgetPage } from './budget.page';
import { MatDialogModule } from '@angular/material/dialog';
import { BudgetItemCardPage } from '../budget-item-card/budget-item-card.page';
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BudgetPageRoutingModule, MatDialogModule],
  declarations: [BudgetPage, AddItemFormPage, BudgetItemListPage, BudgetItemCardPage],
})
export class BudgetPageModule {}
