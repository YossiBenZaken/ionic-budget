import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddItemFormPage } from './add-item-form.page';

const routes: Routes = [
  {
    path: '',
    component: AddItemFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddItemFormPageRoutingModule {}
