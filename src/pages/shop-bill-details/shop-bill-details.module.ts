import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopBillDetailsPage } from './shop-bill-details';

@NgModule({
  declarations: [
    ShopBillDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopBillDetailsPage),
  ],
})
export class ShopBillDetailsPageModule {}
