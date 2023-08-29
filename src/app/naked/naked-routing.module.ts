import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NakedPage } from './naked.page';

const routes: Routes = [
  {
    path: '',
    component: NakedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NakedPageRoutingModule {}
