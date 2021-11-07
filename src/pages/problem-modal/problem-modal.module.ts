import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProblemModalPage } from './problem-modal';

@NgModule({
  declarations: [
    ProblemModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ProblemModalPage),
  ],
})
export class ProblemModalPageModule {}
