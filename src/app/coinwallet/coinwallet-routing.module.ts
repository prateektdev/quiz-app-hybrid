import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinwalletPage } from './coinwallet.page';

const routes: Routes = [
  {
    path: '',
    component: CoinwalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinwalletPageRoutingModule {}
