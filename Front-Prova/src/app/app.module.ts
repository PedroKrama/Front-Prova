import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CadastroLivroComponent } from './pages/CadastroLivro/cadastroLivro.component';
import { ListarLivrosComponent } from 'src/app/pages/ListarLivros/listarLivros.component';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CadastroLivroComponent,
    ListarLivrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
