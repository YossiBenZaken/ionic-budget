import { EditItemModalPage } from './../edit-item-modal/edit-item-modal.page';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { BudgetItemListPage } from './budget-item-list.page';
import { BudgetItemCardPage } from '../budget-item-card/budget-item-card.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [BudgetItemListPage, BudgetItemCardPage, EditItemModalPage]
})
export class BudgetItemListPageModule {}
