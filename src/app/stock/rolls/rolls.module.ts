import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RollsPageRoutingModule } from './rolls-routing.module';

import { RollsPage } from './rolls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RollsPageRoutingModule
  ],
  declarations: [RollsPage]
})
export class RollsPageModule {}
