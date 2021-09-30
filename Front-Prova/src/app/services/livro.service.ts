import { Injectable } from "@angular/core";
import { Livro } from "src/app/Models/Livro";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";



@Injectable({
    providedIn: "root",
  })
  export class livroService {
    private baseURL = "https://localhost:5001/caminho/Livro";

    constructor(private http: HttpClient) {}

    create(livro: Livro) {
      return this.http.post(`${this.baseURL}/create`, livro);
    }

    list(): Observable<Livro[]> {
        return this.http.get<Livro[]>(`${this.baseURL}/list`);
    }
}