import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente, Response } from '../models/response';

const URL = environment.URL
const hhhtpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

  
  constructor(
    private http: HttpClient
  ) { 

  }

  getClientes(): Observable<Response>{
    return this.http.get<Response>(`${URL}cliente`);
  }

  add(cliente: Cliente): Observable<Response>{
    return this.http.post<Response>(`${URL}cliente`, cliente, hhhtpOptions);
  }


}
