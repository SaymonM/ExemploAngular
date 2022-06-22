import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputadoresComponent } from './views/computadores/computadores.component';
import { ContatosComponent } from './views/contatos/contatos.component';
import { EletronicosComponent } from './views/eletronicos/eletronicos.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NoticiaComponent } from './views/noticia/noticia.component';
import { NovidadesComponent } from './views/novidades/novidades.component';

const routes: Routes = [
  {path: "contatos", component: ContatosComponent},
  {path: "", component: HomeComponent},
  {path: "novidades", component: NovidadesComponent},
  {path: "computadores", component: ComputadoresComponent},
  {path: "eletronicos", component: EletronicosComponent},
  {path: "noticias", component: NoticiaComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
