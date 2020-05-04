import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CricketrulePage } from './cricketrule.page';

const routes: Routes = [
  {
    path: '',
    component: CricketrulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CricketrulePageRoutingModule {}
