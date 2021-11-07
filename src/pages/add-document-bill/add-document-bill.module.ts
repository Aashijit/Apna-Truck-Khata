import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDocumentBillPage } from './add-document-bill';

@NgModule({
  declarations: [
    AddDocumentBillPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDocumentBillPage),
  ],
})
export class AddDocumentBillPageModule {}
