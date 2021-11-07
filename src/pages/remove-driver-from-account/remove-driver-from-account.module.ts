import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemoveDriverFromAccountPage } from './remove-driver-from-account';

@NgModule({
  declarations: [
    RemoveDriverFromAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(RemoveDriverFromAccountPage),
  ],
})
export class RemoveDriverFromAccountPageModule {}
