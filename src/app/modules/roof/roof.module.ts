import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoofRoutingModule } from './roof-routing.module';
import { RoofFormComponent } from './containers/roof-form/roof-form.component';

@NgModule({
  declarations: [RoofFormComponent],
  imports: [
    CommonModule,
    RoofRoutingModule
  ]
})
export class RoofModule { }
