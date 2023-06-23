import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RollsPage } from './rolls.page';

const routes: Routes = [
  {
    path: '',
    component: RollsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RollsPageRoutingModule {}
