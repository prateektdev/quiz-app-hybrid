import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinwalletPageRoutingModule } from './coinwallet-routing.module';

import { CoinwalletPage } from './coinwallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinwalletPageRoutingModule
  ],
  declarations: [CoinwalletPage]
})
export class CoinwalletPageModule {}
