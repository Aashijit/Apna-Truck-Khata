import { CalendarModule } from 'ion2-calendar';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleWorkReportPage } from './vehicle-work-report';

@NgModule({
  declarations: [
    VehicleWorkReportPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleWorkReportPage),
    CalendarModule
  ],
})
export class VehicleWorkReportPageModule {}
