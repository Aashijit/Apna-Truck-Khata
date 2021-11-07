import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverDetailsSearchPage } from './driver-details-search';

@NgModule({
  declarations: [
    DriverDetailsSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverDetailsSearchPage),
  ],
})
export class DriverDetailsSearchPageModule {}
