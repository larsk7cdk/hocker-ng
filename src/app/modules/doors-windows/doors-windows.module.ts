import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoorsWindowsRoutingModule } from './doors-windows-routing.module';
import { DoorsWindowsFormComponent } from './containers/doors-windows-form/doors-windows-form.component';

@NgModule({
  declarations: [DoorsWindowsFormComponent],
  imports: [
    CommonModule,
    DoorsWindowsRoutingModule
  ]
})
export class DoorsWindowsModule { }
