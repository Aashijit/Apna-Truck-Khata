import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillDescriptionPage } from './bill-description';

@NgModule({
  declarations: [
    BillDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(BillDescriptionPage),
  ],
})
export class BillDescriptionPageModule {}
