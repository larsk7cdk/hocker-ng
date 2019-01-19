import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeFormComponent } from './modules/home/containers/home-form/home-form.component';

const routes: Routes = [
    { path: 'home', component: HomeFormComponent },
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
