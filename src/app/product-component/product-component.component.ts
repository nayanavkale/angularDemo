import { Component, OnInit,Input } from '@angular/core';
import {ListComponentComponent} from '../list-component/list-component.component'

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() pname:ListComponentComponent;
  @Input() pcolor:ListComponentComponent;
  @Input() pcost:ListComponentComponent;

  
}
