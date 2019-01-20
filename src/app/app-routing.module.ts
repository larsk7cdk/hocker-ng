import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeFormComponent } from './modules/home/containers/home-form/home-form.component';

const routes: Routes = [
    { path: 'home', component: HomeFormComponent },
    {
        path: 'doors-windows',
        loadChildren: './modules/doors-windows/doors-windows.module#DoorsWindowsModule',
    },
    {
        path: 'roof',
        loadChildren: './modules/roof/roof.module#RoofModule',
    },
    {
        path: 'service',
        loadChildren: './modules/service/service.module#ServiceModule',
    },
    {
        path: 'contact',
        loadChildren: './modules/contact/contact.module#ContactModule',
    },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
