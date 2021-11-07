import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillPaymentSearchPage } from './bill-payment-search';

@NgModule({
  declarations: [
    BillPaymentSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(BillPaymentSearchPage),
  ],
})
export class BillPaymentSearchPageModule {}
