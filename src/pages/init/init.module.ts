import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InitPage } from './init';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  declarations: [
    InitPage,
  ],
  imports: [
    NgOtpInputModule,
    IonicPageModule.forChild(InitPage),
  ]
})
export class InitPageModule {}
