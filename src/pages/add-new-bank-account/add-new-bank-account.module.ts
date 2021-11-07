import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewBankAccountPage } from './add-new-bank-account';

@NgModule({
  declarations: [
    AddNewBankAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewBankAccountPage),
  ],
})
export class AddNewBankAccountPageModule {}
