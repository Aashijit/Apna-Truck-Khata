import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopBillDescriptionPage } from './shop-bill-description';

@NgModule({
  declarations: [
    ShopBillDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopBillDescriptionPage),
  ],
})
export class ShopBillDescriptionPageModule {}
