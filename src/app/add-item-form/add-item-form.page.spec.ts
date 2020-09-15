import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddItemFormPage } from './add-item-form.page';

describe('AddItemFormPage', () => {
  let component: AddItemFormPage;
  let fixture: ComponentFixture<AddItemFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddItemFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
