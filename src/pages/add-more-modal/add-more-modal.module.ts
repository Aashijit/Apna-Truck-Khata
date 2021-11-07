import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMoreModalPage } from './add-more-modal';

@NgModule({
  declarations: [
    AddMoreModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMoreModalPage),
  ],
})
export class AddMoreModalPageModule {}
