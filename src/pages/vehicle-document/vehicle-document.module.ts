import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleDocumentPage } from './vehicle-document';

@NgModule({
  declarations: [
    VehicleDocumentPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleDocumentPage),
  ],
})
export class VehicleDocumentPageModule {}
