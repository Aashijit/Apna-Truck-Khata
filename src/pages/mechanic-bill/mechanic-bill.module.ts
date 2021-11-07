import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MechanicBillPage } from './mechanic-bill';

@NgModule({
  declarations: [
    MechanicBillPage,
  ],
  imports: [
    IonicPageModule.forChild(MechanicBillPage),
  ],
})
export class MechanicBillPageModule {}
