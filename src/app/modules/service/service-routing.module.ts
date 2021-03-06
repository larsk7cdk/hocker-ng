import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceFormComponent } from './containers/service-form/service-form.component';

const routes: Routes = [{ path: '', component: ServiceFormComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ServiceRoutingModule {}
