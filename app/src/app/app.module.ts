import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing';

import { MyApp } from './app.component';
import { EventsPageModule } from '../pages/events/events.module';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { MenuPage } from '../pages/menu/menu';
import { EventServiceProvider } from '../providers/event-service/event-service';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { WishesPage } from '../pages/wishes/wishes';
import { WishAddPage } from '../pages/wish-add/wish-add';
import { WishServiceProvider } from '../providers/wish-service/wish-service';
import { DonationsPage } from './../pages/donations/donations';
import { DonationServiceProvider } from '../providers/donation-service/donation-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    WelcomePage,
    MenuPage,
    WishAddPage
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
    MenuPage,
    WishAddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventServiceProvider,
    LoginServiceProvider,
    WishServiceProvider,
    DonationServiceProvider
  ]
})
export class AppModule {}
