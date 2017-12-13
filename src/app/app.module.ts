import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// kentico cloud
import { DeliveryClientProvider } from './setup/delivery-client.provider';


import { NgBoxModule } from 'ngbox/ngbox.module';
import { NgBoxService } from 'ngbox/ngbox.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgBoxModule,
    BrowserModule,
     CommonModule
  ],
  providers: [DeliveryClientProvider, NgBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
