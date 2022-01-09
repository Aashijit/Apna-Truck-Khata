import { CalendarModule } from 'ion2-calendar';
import { DatePipe } from '@angular/common';
import { Camera } from '@ionic-native/camera';
import { MessageProvider } from './../providers/message/message';
import { CodesProvider } from './../providers/codes/codes';
import { RestProvider } from './../providers/rest/rest';
import { Contact, Contacts } from '@ionic-native/contacts';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { NgOtpInputModule } from  'ng-otp-input';


@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CalendarModule,
    IonicImageViewerModule,
    BrowserAnimationsModule,
    NgOtpInputModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Contact,
    Contacts,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    CodesProvider,
    PhotoViewer,
    MessageProvider,
    Camera,
    DatePipe,
    Push
  ]
})
export class AppModule {}
