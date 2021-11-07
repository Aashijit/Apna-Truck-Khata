import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DecisionModalPage } from './decision-modal';

@NgModule({
  declarations: [
    DecisionModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DecisionModalPage),
  ],
})
export class DecisionModalPageModule {}
