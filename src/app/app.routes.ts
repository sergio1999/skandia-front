import { Routes } from '@angular/router';
import { HomeComponent } from './ui/page/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: '**', component: NotFoundComponent }
];