import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFormComponent } from './home/containers/home-form/home-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [HomeFormComponent],
    imports: [CommonModule, SharedModule],
    exports: [HomeFormComponent],
})
export class ModulesModule {}
