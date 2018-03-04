import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { EventsPageModule } from '../pages/events/events.module';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { MenuPage } from '../pages/menu/menu';
import { EventServiceProvider } from '../providers/event-service/event-service';
import { LoginServiceProvider } from '../providers/login-service/login-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    WelcomePage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EventsPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    WelcomePage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventServiceProvider,
    LoginServiceProvider
  ]
})
export class AppModule {}
