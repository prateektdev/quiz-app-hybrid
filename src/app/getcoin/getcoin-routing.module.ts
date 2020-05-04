import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetcoinPage } from './getcoin.page';

const routes: Routes = [
  {
    path: '',
    component: GetcoinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetcoinPageRoutingModule {}
