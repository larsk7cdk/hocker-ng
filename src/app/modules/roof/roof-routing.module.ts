import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoofFormComponent } from './containers/roof-form/roof-form.component';

const routes: Routes = [{ path: '', component: RoofFormComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RoofRoutingModule {}
