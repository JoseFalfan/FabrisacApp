import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveguidesPage } from './activeguides.page';

const routes: Routes = [
  {
    path: '',
    component: ActiveguidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiveguidesPageRoutingModule {}
