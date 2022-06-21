import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { User } from 'src/app/models/user';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticia = [] as Noticia[];

  constructor(private noticiaSerivce: NoticiaService) { }

  ngOnInit(): void {
    this.carregarNoticia();
  }

  carregarNoticia(){
    this.noticiaSerivce.getNoticia().subscribe( (noticiaRecebida: Noticia[]) => {
      this.noticia = noticiaRecebida;
      console.log(this.noticia)
    } )
  }

  userModel = new User("", "");

  onSubmit(){
    console.log(this.userModel)
  }

}
