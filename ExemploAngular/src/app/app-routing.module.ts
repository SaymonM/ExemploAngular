import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputadoresComponent } from './views/computadores/computadores.component';
import { ContatosComponent } from './views/contatos/contatos.component';
import { EletronicosComponent } from './views/eletronicos/eletronicos.component';
import { HomeComponent } from './views/home/home.component';
import { NovidadesComponent } from './views/novidades/novidades.component';

const routes: Routes = [
  {path: "contatos", component: ContatosComponent},
  {path: "", component: HomeComponent},
  {path: "novidades", component: NovidadesComponent},
  {path: "computadores", component: ComputadoresComponent},
  {path: "eletronicos", component: EletronicosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
