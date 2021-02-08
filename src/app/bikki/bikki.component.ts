import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { list } from '../Items_List';


@Component({
  selector: 'app-bikki',
  templateUrl: './bikki.component.html',
  styleUrls: ['./bikki.component.css']
})
export class BikkiComponent implements OnInit {
 favbikki!: Item;
 bikkilist = list;
 
  constructor() { }

  ngOnInit() {
    
  }

  onClickFav(each: Item): void{
    this.favbikki = each;
  }


}
