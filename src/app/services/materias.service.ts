import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from '../utils/endPoints';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor(private readonly http:HttpClient) {  
  } 
 
  public getAll(): Observable<any> {
    return this.http.get(endpoints.Materia)
  }
}
