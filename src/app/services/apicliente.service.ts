import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../models/response';

const URL = environment.URL

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


}
