import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  //variavel criada para armazenar o endereço da API
  url = "http://localhost:3000/noticia";

  //insere a dependência HttpClient
  constructor(private httpClient: HttpClient) { }

  //variavel que armazena as configurações de header da requisição
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  //método get, que vai trazer as noticias da API
  getNoticia(): Observable<Noticia[]>{
    return this.httpClient.get<Noticia[]>(this.url)
  }

}
