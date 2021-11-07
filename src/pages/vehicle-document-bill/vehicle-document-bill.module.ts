import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleDocumentBillPage } from './vehicle-document-bill';

@NgModule({
  declarations: [
    VehicleDocumentBillPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleDocumentBillPage),
  ],
})
export class VehicleDocumentBillPageModule {}
