import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecurityAndBackupPage } from './security-and-backup';

@NgModule({
  declarations: [
    SecurityAndBackupPage,
  ],
  imports: [
    IonicPageModule.forChild(SecurityAndBackupPage),
  ],
})
export class SecurityAndBackupPageModule {}
