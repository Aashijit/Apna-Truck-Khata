import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplaintsUpdatePage } from './complaints-update';

@NgModule({
  declarations: [
    ComplaintsUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintsUpdatePage),
  ],
})
export class ComplaintsUpdatePageModule {}
