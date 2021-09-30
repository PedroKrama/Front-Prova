import { Livro } from 'src/app/Models/Livro';
import { livroService } from './../../services/livro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadlivros',
  templateUrl: './cadastroLivro.component.html',
  styleUrls: ['./cadastroLivro.component.css']
})
export class CadastroLivroComponent implements OnInit {
    
    titulo!: string
    isbn!: string
    categoria!: string
    autor!: string


    constructor(private service: livroService, private router: Router) {}

    ngOnInit(): void 
    {

    }

    create(): void 
    {
      let livro : Livro  = 
      {
        titulo:  this.titulo,
        isbn:  this.isbn,
        categoria:  this.categoria,
        autor:  this.autor,
      }

      this.service.create(livro).subscribe((livro) => 
      {
        this.router.navigate([''])
      })
    }


}