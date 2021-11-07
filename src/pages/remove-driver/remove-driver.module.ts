import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemoveDriverPage } from './remove-driver';

@NgModule({
  declarations: [
    RemoveDriverPage,
  ],
  imports: [
    IonicPageModule.forChild(RemoveDriverPage),
  ],
})
export class RemoveDriverPageModule {}
