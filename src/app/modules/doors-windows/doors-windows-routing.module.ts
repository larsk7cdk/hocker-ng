import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoorsWindowsFormComponent } from './containers/doors-windows-form/doors-windows-form.component';

const routes: Routes = [{ path: '', component: DoorsWindowsFormComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DoorsWindowsRoutingModule {}
