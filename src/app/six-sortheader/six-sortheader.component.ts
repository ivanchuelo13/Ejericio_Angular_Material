import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material/sort';
import {Animes} from '../dto/sort';
import {SortService } from '../service/sort.service';



@Component({
  selector: 'app-six-sortheader',
  templateUrl: './six-sortheader.component.html',
  styleUrls: ['./six-sortheader.component.scss']
})
export class SixSortheaderComponent implements OnInit {

  ngOnInit() {
  }

  sortedData: Animes[];

  constructor(private sortService: SortService) {
    this.sortedData = this.sortService.getSorter();
  }

  sortData(sort: Sort) {
    const data = this.sortService.animes.slice();
    if (!sort.active || sort.direction === '') {
        this.sortedData = data;
        return;
    }

    this.sortedData = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
            case 'Name': return compare(a.Name, b.Name, isAsc);
            case 'Genero': return compare(a.Genero, b.Genero, isAsc);
            case 'Calificacion1': return compare(a.Calificacion1, b.Calificacion1, isAsc);
            case 'Fecha': return compare(a.Fecha, b.Fecha, isAsc);
            case 'Calificacion2': return compare(a.Calificacion2, b.Calificacion2, isAsc);
            default: return 0;
        }
    });
}

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
