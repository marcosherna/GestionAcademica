import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import EstudiantesService from './services/estudiantes.service';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    TreeModule,
    ButtonModule],
  templateUrl: './app.component.html', 
  styleUrl: './style.css'
})
export class AppComponent {
  title = 'GestionAcademica';

  files!: TreeNode[];

    constructor() {}

    ngOnInit() { 
    } 

  private readonly estudiantesServices = inject(EstudiantesService);
// Creando observable
  estudiantes$ = this.estudiantesServices.obtenerEstudiantes();

 

}
