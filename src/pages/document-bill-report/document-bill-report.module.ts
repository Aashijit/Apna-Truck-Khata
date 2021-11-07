import { CalendarModule } from 'ion2-calendar';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentBillReportPage } from './document-bill-report';

@NgModule({
  declarations: [
    DocumentBillReportPage,
  ],
  imports: [
    IonicPageModule.forChild(DocumentBillReportPage),
    CalendarModule
  ],
})
export class DocumentBillReportPageModule {}
