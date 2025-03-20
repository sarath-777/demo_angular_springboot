import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';

export const routes: Routes = [

    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'welcome/:name',component:WelcomeComponent,canActivate:[RouteGaurdService]},
    {path:'todo',component:ListTodosComponent,canActivate:[RouteGaurdService]},
    {path:'logout',component:LogoutComponent,canActivate:[RouteGaurdService]},
    {path:'**',component:ErrorComponent}
    


];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }