import { CalendarModule } from 'ion2-calendar';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleBillReportPage } from './vehicle-bill-report';

@NgModule({
  declarations: [
    VehicleBillReportPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleBillReportPage),
    CalendarModule
  ],
})
export class VehicleBillReportPageModule {}
