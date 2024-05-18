import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import EstudiantesService from './services/estudiantes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html', 
})
export class AppComponent {
  title = 'GestionAcademica';

  private readonly estudiantesServices = inject(EstudiantesService);
// Creando observable
  estudiantes$ = this.estudiantesServices.obtenerEstudiantes();

  constructor() {
    // this.estudiantesServices.postEstudiante().subscribe((data:any) => { console.log(data) });
  }

}
