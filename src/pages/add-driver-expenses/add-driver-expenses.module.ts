import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDriverExpensesPage } from './add-driver-expenses';

@NgModule({
  declarations: [
    AddDriverExpensesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDriverExpensesPage),
  ],
})
export class AddDriverExpensesPageModule {}
