import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportModalPage } from './report-modal';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  declarations: [
    ReportModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportModalPage),
    CalendarModule
  ]
})
export class ReportModalPageModule {}
