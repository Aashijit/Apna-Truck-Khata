import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartsWorkModalPage } from './parts-work-modal';

@NgModule({
  declarations: [
    PartsWorkModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PartsWorkModalPage),
  ],
})
export class PartsWorkModalPageModule {}
