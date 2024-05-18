import { environment } from "../../environments/environment.development";

export const endpoints = {
    // *** Estudiantes ***
    agregarEstudiante: environment.serverURL.concat('/api/estudiante'),
    actualizarEstudiante: environment.serverURL.concat('api/estudiante/:id'),
    eliminarEstudiante: environment.serverURL.concat('/api/estudiante/:id'),
    obtenerEstudiantePorID: environment.serverURL.concat('/api/estudiante/:id'),
    obtenerEstudiantes: environment.serverURL.concat('/api/estudiante')
    // ***********************
};