import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PredetailPage } from './predetail.page';

const routes: Routes = [
  {
    path: '',
    component: PredetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PredetailPageRoutingModule {}
