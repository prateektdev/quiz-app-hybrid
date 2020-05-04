import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WinnerlistPage } from './winnerlist.page';

const routes: Routes = [
  {
    path: '',
    component: WinnerlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WinnerlistPageRoutingModule {}
