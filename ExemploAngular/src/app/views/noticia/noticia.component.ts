import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  listaNoticias = [] as Noticia[];

  constructor(private noticiaService: NoticiaService) { }

  ngOnInit(): void {
    this.carregarNoticia();
  }

  carregarNoticia(){
    this.noticiaService.getNoticia().subscribe( (noticiaRecebida: Noticia[]) => {
      this.listaNoticias = noticiaRecebida;
      console.log(this.listaNoticias)
    } )
  }

}
