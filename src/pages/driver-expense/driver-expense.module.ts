import { CalendarModule } from 'ion2-calendar';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverExpensePage } from './driver-expense';

@NgModule({
  declarations: [
    DriverExpensePage,
  ],
  imports: [
    IonicPageModule.forChild(DriverExpensePage),
    CalendarModule
  ],
})
export class DriverExpensePageModule {}
