import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosComponent } from './views/contatos/contatos.component';
import { JogadorComponent } from './views/jogador/jogador.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { NovidadesComponent } from './views/novidades/novidades.component';
import { ComputadoresComponent } from './views/computadores/computadores.component';
import { EletronicosComponent } from './views/eletronicos/eletronicos.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent,
    JogadorComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NovidadesComponent,
    ComputadoresComponent,
    EletronicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
