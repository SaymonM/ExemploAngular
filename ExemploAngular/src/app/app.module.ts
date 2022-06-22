import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

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
import { NoticiaComponent } from './views/noticia/noticia.component';
import { LoginComponent } from './views/login/login.component';

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
    EletronicosComponent,
    NoticiaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
