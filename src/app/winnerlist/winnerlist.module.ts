import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinnerlistPageRoutingModule } from './winnerlist-routing.module';

import { WinnerlistPage } from './winnerlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WinnerlistPageRoutingModule
  ],
  declarations: [WinnerlistPage]
})
export class WinnerlistPageModule {}
