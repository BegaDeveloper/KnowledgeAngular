import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HttpComponent } from './http/http.component';
import { ListComponent } from './list/list.component';
import { LoggedInGuard } from './services/logged-in.guard';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'form', component: FormComponent, canActivate: [LoggedInGuard] },
  { path: 'list', component: ListComponent, canActivate: [LoggedInGuard] },
  { path: 'http', component: HttpComponent, canActivate: [LoggedInGuard] },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
  { path: 'nav', component: NavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routesApp = [
  FormComponent,
  LoginComponent,
  ListComponent,
  HttpComponent,
  NavComponent,
];
