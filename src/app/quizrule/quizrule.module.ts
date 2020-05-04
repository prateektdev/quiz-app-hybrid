import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizrulePageRoutingModule } from './quizrule-routing.module';

import { QuizrulePage } from './quizrule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizrulePageRoutingModule
  ],
  declarations: [QuizrulePage]
})
export class QuizrulePageModule {}
