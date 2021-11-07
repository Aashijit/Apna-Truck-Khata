import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleKhataPage } from './vehicle-khata';

@NgModule({
  declarations: [
    VehicleKhataPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleKhataPage),
  ],
})
export class VehicleKhataPageModule {}
