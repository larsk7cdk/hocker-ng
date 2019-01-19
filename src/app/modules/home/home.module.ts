import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeFormComponent } from './containers/home-form/home-form.component';

@NgModule({
    declarations: [HomeFormComponent],
    imports: [CommonModule, HomeRoutingModule],
    exports: [HomeFormComponent],
})
export class HomeModule {}
