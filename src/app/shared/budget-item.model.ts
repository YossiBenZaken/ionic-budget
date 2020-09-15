export class BudgetItem {
  constructor(public description: string, public amount: number) {}
}
export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}
