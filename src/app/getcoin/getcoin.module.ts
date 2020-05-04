import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetcoinPageRoutingModule } from './getcoin-routing.module';

import { GetcoinPage } from './getcoin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetcoinPageRoutingModule
  ],
  declarations: [GetcoinPage]
})
export class GetcoinPageModule {}
