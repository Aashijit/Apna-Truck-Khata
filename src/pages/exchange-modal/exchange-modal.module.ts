import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExchangeModalPage } from './exchange-modal';

@NgModule({
  declarations: [
    ExchangeModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ExchangeModalPage),
  ],
})
export class ExchangeModalPageModule {}
