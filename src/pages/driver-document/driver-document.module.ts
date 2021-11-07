import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverDocumentPage } from './driver-document';

@NgModule({
  declarations: [
    DriverDocumentPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverDocumentPage),
  ],
})
export class DriverDocumentPageModule {}
