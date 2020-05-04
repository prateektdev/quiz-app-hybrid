import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EarnwalletPageRoutingModule } from './earnwallet-routing.module';

import { EarnwalletPage } from './earnwallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EarnwalletPageRoutingModule
  ],
  declarations: [EarnwalletPage]
})
export class EarnwalletPageModule {}
