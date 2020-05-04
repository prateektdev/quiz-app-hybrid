import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PredetailPageRoutingModule } from './predetail-routing.module';

import { PredetailPage } from './predetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PredetailPageRoutingModule
  ],
  declarations: [PredetailPage]
})
export class PredetailPageModule {}
