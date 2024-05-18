import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import EstudiantesService from './services/estudiantes.service';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button'; 
import { LoginComponent } from './components/login/login.component';
import { MateriasService } from './services/materias.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,  
    LoginComponent,
    ButtonModule],
  templateUrl: './app.component.html',  
})
export class AppComponent {
  title = 'GestionAcademica';  
  private readonly estudiantesServices = inject(EstudiantesService);
  private readonly materiaService = inject(MateriasService);
// Creando observable
  estudiantes$ = this.estudiantesServices.obtenerEstudiantes();
  materias = this.materiaService.getAll();
}
