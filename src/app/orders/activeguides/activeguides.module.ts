import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveguidesPageRoutingModule } from './activeguides-routing.module';

import { ActiveguidesPage } from './activeguides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveguidesPageRoutingModule
  ],
  declarations: [ActiveguidesPage]
})
export class ActiveguidesPageModule {}
