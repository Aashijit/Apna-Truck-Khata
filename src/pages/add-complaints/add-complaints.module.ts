import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddComplaintsPage } from './add-complaints';

@NgModule({
  declarations: [
    AddComplaintsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddComplaintsPage),
  ],
})
export class AddComplaintsPageModule {}
