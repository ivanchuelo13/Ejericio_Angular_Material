import { Injectable } from '@angular/core';
import { Teacher } from '../dto/teachers';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teacher: Teacher[] = [
    {name: 'CandyAce', year: 2010 , materia: 'Calculo Diferencial', facultad: 'Ciencias Basicas'},
    {name: 'Fernando', year: 2014 , materia: 'Caluclo Integral', facultad: 'Ciencias Basicas'},
    {name: 'Casallas', year: 2017 , materia: 'Software OP', facultad: 'Ing Sistemas'},
    {name: 'Marce', year: 2019 , materia: 'Ingles 3', facultad: 'Ciencias Basicas'},
    {name: 'Nolasco', year: 2009 , materia: 'Algebra', facultad: 'Ciencias Basicas'},
    {name: 'Cesar', year: 2011 , materia: 'Calculo Diferencial', facultad: 'Ing Mecanica'}
  ];

  constructor() { }

  getTeacher() {
    return this.teacher;
  }

  getPrueba(){
    alert("Hola mundillo")
  }
}
