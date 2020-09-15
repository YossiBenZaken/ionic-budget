import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { BudgetItem } from '../shared/budget-item.model';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.page.html',
  styleUrls: ['./edit-item-modal.page.scss'],
})
export class EditItemModalPage implements OnInit {
  @Input() item: BudgetItem;
  constructor(private modal: ModalController) {}
  ngOnInit() {
  }
  async onSubmitted(updatedItem: BudgetItem) {
    this.modal.dismiss(updatedItem);
  }
  changeAmount(value: string) {
    this.item.amount = Number(value);
  }
  changeDescription(value: string) {
    this.item.description = value;
  }
}
