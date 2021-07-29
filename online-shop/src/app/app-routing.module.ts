import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/users/login/login.component';
import { TableContainerComponent } from './feature/products/table-container/table-container.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'products',
    component: TableContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
