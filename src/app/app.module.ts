import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
registerLocaleData(localeEs);

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }, SQLite],
  bootstrap: [AppComponent],
})
export class AppModule {}
