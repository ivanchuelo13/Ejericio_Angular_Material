import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-listsimple',
  templateUrl: './one-listsimple.component.html',
  styleUrls: ['./one-listsimple.component.scss']
})
export class OneListsimpleComponent implements OnInit {

  constructor() { }

   typesOfShoes:string[]=['Boots', 'Clogs', 'Loafers','Moccasins','Sneakers'];

  ngOnInit() {
  }

}
