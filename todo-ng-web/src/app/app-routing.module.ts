import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListsTodosComponent } from './lists-todos/lists-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';


//links and their ending and some authentications elements - canActivate
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  
  { path: 'welcome/:name', component: WelcomeComponent , canActivate: [RouteGuardService]},
  { path: 'todos', component: ListsTodosComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent ,canActivate: [RouteGuardService]},
  { path: 'todos/:id', component: TodoComponent, canActivate: [RouteGuardService] },


  { path: '**', component: ErrorComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
