import { livroService } from './../../services/livro.service';
import { Livro } from './../../Models/Livro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listlivros',
  templateUrl: './listarLivros.component.html',
  styleUrls: ['./listarLivros.component.css']
})
export class ListarLivrosComponent implements OnInit {

    livros: Livro[] = [];

    constructor(private service: livroService) 
    {

    }

    ngOnInit(): void 
    {
      this.service.list().subscribe((livro) => 
      {
        this.livros = livro;
      })
    }
}