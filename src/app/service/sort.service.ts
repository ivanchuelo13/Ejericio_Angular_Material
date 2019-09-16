import { Injectable } from '@angular/core';
import { Animes } from '../dto/sort';
import { Sort } from '@angular/material/sort';

@Injectable({
    providedIn: 'root'
})
export class SortService {

    animes: Animes[] = [
        { Name: 'One Piece',Genero : 'Accion , Aventura , Drama', Calificacion1: 10, Fecha: 'Mayo 2017', Calificacion2: 'P' },
        { Name: 'Toradora',Genero : 'Rormance, Comedia , Drama', Calificacion1: 9, Fecha: 'Diciembre 2012', Calificacion2: 'P'  },
        { Name: 'One Push Man',Genero : 'Accion, Shonen', Calificacion1: 7, Fecha: 'Diciembre 2015', Calificacion2: 'E'  },
        { Name: 'Noragami',Genero : 'Accion, Sobrenatural, Fantasia', Calificacion1: 7, Fecha: 'Septiembre 206', Calificacion2: 'E' },
        { Name: 'Kore wa Zombie',Genero : 'Ecchi, Comedia', Calificacion1: 5, Fecha: 'Abril 2012', Calificacion2: 'B' },
    ];

    sortedData: Animes[];

    constructor() {
        this.sortedData = this.animes.slice();
    }

    getSorter() {
        return this.animes;
    }
}
