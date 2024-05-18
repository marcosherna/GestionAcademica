import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from '../utils/endPoints';

@Injectable({
  providedIn: 'root'
})
export default class EstudiantesService {
  private readonly http = inject(HttpClient);

  constructor() {  
  }
  
  obtenerEstudiantes(): Observable<any> {
    return this.http.get(endpoints.Estudiante);
  }
 

}
