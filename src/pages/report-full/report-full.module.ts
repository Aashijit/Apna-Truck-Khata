import { CalendarModule } from 'ion2-calendar';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportFullPage } from './report-full';

@NgModule({
  declarations: [
    ReportFullPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportFullPage),
    CalendarModule
  ],
})
export class ReportFullPageModule {}
