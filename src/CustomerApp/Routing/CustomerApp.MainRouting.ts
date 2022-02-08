import { Routes } from '@angular/router';
import { HomeComponent } from '../Home/CustomerApp.HomeComponent';

export const MainRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  {
    path: 'Customer',
    loadChildren: () =>
      import('../Customer/CustomerApp.CustomerModule').then(
        (x) => x.CustomerModule
      ),
  },
  {
    path: 'Supplier',
    loadChildren: () =>
      import('../Supplier/CustomerApp.SupplierModule').then(
        (x) => x.SupplierModule
      ),
  },
  { path: '', component: HomeComponent },
];
