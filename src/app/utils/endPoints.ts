import { environment } from "../../environments/environment.development";

export const endpoints = { 
    Estudiante: environment.serverURL.concat('/api/estudiante'),
    Materia: environment.serverURL.concat('/api/materia') 
    // ***********************
};