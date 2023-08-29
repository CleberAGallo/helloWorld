import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NakedPageRoutingModule } from './naked-routing.module';

import { NakedPage } from './naked.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NakedPageRoutingModule
  ],
  declarations: [NakedPage]
})
export class NakedPageModule {}
