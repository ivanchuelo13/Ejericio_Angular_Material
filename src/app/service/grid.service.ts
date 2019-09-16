import { Injectable } from '@angular/core';
import { Grid } from '../dto/grid';

@Injectable({
  providedIn: 'root'
})
export class GridService {
    
    grid: Grid[] = [
        {text: 'CUADRO ONE', cols: 3, rows: 1, color: '#34495E '},
        {text: 'CUADRO TWO', cols: 1, rows: 2, color: '#669E3A '},
        {text: 'CUADRO THREE', cols: 1, rows: 1, color: '#7F4EBA '},
        {text: 'CUADRO FOUR', cols: 2, rows: 1, color: '#DDBDF1'},
      ];

  constructor() { }

  getGrid() {
    return this.grid;
  }
}
