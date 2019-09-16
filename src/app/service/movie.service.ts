import { Injectable } from '@angular/core';
import { Movie } from '../dto/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = [
    {name: 'La isla siniestra', year: 2010},
    {name: 'Perdida', year: 2014},
    {name: 'The number 23', year: 2007},
    {name: 'El Origen', year: 2010},
    {name: 'El maquinista', year: 2004},
    {name: 'Hola',year:2009}
  ];

  constructor( ) { 
    
  }

  getMovies() {
    return this.movies;
  }
}
