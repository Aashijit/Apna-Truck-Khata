import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyDetailsSearchModalPage } from './buy-details-search-modal';

@NgModule({
  declarations: [
    BuyDetailsSearchModalPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyDetailsSearchModalPage),
  ],
})
export class BuyDetailsSearchModalPageModule {}
