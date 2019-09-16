import { Component, OnInit } from '@angular/core';
import { Grid } from '../dto/grid';
import { GridService } from '../service/grid.service';


@Component({
  selector: 'app-two-grid',
  templateUrl: './two-grid.component.html',
  styleUrls: ['./two-grid.component.scss']
})
export class TwoGridComponent implements OnInit {

  grid:  Grid[];
  seleccion = 'None';

  constructor(private gridService: GridService) { 
    this.grid = this.gridService.getGrid();
  }
  ngOnInit() {
  }
}
