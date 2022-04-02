import { CountdownModule } from 'ngx-countdown';
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
    CountdownModule,
    IonicPageModule.forChild(InitPage),
  ]
})
export class InitPageModule {}
