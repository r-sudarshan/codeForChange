import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { EventsPage } from '../pages/events/events';
import { LoginPage } from '../pages/login/login';
import { ModalContentPage } from '../pages/login/login';
import { EventServiceProvider } from '../providers/event-service/event-service';

@NgModule({
  declarations: [
    MyApp,
    EventsPage,
    LoginPage,
    ModalContentPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsPage,
    LoginPage,
    ModalContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventServiceProvider
  ]
})
export class AppModule {}
