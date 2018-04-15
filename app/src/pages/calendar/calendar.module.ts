import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';
import { CalendarModule } from 'ionic3-calendar-en';

@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [
    CalendarModule,
    IonicPageModule.forChild(CalendarPage)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CalendarPageModule {
  
}
