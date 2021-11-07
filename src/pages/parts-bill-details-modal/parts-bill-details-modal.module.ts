import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartsBillDetailsModalPage } from './parts-bill-details-modal';

@NgModule({
  declarations: [
    PartsBillDetailsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PartsBillDetailsModalPage),
  ],
})
export class PartsBillDetailsModalPageModule {}
