import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPermitPage } from './add-permit';

@NgModule({
  declarations: [
    AddPermitPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPermitPage),
  ],
})
export class AddPermitPageModule {}
