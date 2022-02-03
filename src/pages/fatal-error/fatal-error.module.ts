import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FatalErrorPage } from './fatal-error';

@NgModule({
  declarations: [
    FatalErrorPage,
  ],
  imports: [
    IonicPageModule.forChild(FatalErrorPage),
  ],
})
export class FatalErrorPageModule {}
