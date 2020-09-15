import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem, UpdateEvent } from '../shared/budget-item.model';
import { EditItemModalPage } from '../edit-item-modal/edit-item-modal.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.page.html',
  styleUrls: ['./budget-item-list.page.scss'],
})
export class BudgetItemListPage {
  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();
  constructor(public dialog: ModalController) {}
  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item);
  }

  async onCardClicked(item: BudgetItem) {
    // show the edit modal
    const dialogRef = await this.dialog.create({
      component: EditItemModalPage,
      componentProps: {
        item,
      },
    });
    dialogRef.onDidDismiss().then(d => {
      if (d !== null) {
        this.update.emit({
          old: item,
          new: d.data,
        });
      }
    });
    return await dialogRef.present();
    // dialogRef.afterClosed().subscribe(result => {
    //   // check if result has a value
    //   if (result) {
    //     this.update.emit({
    //       old: item,
    //       new: result
    //     });
    //   }
    // });
  }
}
