import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplaintsKhataPage } from './complaints-khata';

@NgModule({
  declarations: [
    ComplaintsKhataPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintsKhataPage),
  ],
})
export class ComplaintsKhataPageModule {}
