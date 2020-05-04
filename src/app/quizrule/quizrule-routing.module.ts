import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizrulePage } from './quizrule.page';

const routes: Routes = [
  {
    path: '',
    component: QuizrulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizrulePageRoutingModule {}
