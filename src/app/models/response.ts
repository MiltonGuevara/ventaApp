import { AppRoutingModule } from "../app-routing.module";

export interface Response{
    exito: number;
    mensaje: string;
    data : Cliente[];
}

export interface Cliente{
    id: number;
    nombre: string;
    telefono: string;
    email: string;
}