import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroLivroComponent } from "./pages/CadastroLivro/cadastroLivro.component";
import { ListarLivrosComponent } from "src/app/pages/ListarLivros/listarLivros.component";

const routes: Routes = [
    {path: '', component: ListarLivrosComponent},
    {path: 'cadastro', component: CadastroLivroComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})

export class AppRoutingModule
{

}


