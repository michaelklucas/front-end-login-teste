import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PainelComponent } from './pages/painel/painel.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AuthGuardService } from './service/authGuard.service';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "painel", component: PainelComponent, canActivate: [AuthGuardService]
  },
  {
    path: "usuario", component: UsuariosComponent, canActivate: [AuthGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
