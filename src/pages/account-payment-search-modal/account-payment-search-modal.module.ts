import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountPaymentSearchModalPage } from './account-payment-search-modal';

@NgModule({
  declarations: [
    AccountPaymentSearchModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountPaymentSearchModalPage),
  ],
})
export class AccountPaymentSearchModalPageModule {}
