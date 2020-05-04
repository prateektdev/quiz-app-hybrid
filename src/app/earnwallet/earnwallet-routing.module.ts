import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarnwalletPage } from './earnwallet.page';

const routes: Routes = [
  {
    path: '',
    component: EarnwalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarnwalletPageRoutingModule {}
