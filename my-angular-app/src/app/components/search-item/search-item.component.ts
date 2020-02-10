import { Component, OnInit } from '@angular/core';
import {SearchItem} from "../../models/search-item/search-item.model";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  searchItem: SearchItem;

  constructor() { }

  ngOnInit(): void {
  }

}
