import { Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: "", component:HomeComponent, pathMatch: "full"},
    {path: "lista-de-clientes", title:'Lista de Clientes',component: CustomerListComponent},
    {path: "**", component: PageNotFoundComponent}
];
