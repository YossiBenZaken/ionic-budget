import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddItemFormPageRoutingModule } from './add-item-form-routing.module';

import { AddItemFormPage } from './add-item-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddItemFormPageRoutingModule
  ],
  declarations: [AddItemFormPage]
})
export class AddItemFormPageModule {}
