import { CalendarModule } from 'ion2-calendar';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarModalPage } from './calendar-modal';

@NgModule({
  declarations: [
    CalendarModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarModalPage),
    CalendarModule
  ],
})
export class CalendarModalPageModule {}
