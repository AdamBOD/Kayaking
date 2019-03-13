import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SeaKayakingComponent } from './sea-kayaking/sea-kayaking.component';
import { CanoeingComponent } from './canoeing/canoeing.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarouselHolderComponent } from './carousel-holder/carousel-holder.component';
import { SUPComponent } from './sup/sup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SeaKayakingComponent,
    CanoeingComponent,
    ContactUsComponent,
    CarouselHolderComponent,
    SUPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
