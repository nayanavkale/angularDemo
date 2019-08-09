import { Component, OnInit,Output,Input} from '@angular/core';
import {ProductComponentComponent} from '../product-component/product-component.component';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pcolor ='';
  pname = '';
  pcost = '';
   onClickMe1() {
     this.pname = 'Ac';
     this.pcolor ='Green';
     this.pcost = '15000';

  }

  onClickMe2() {
    this.pname = 'Fridge';
    this.pcolor ='Grey';
    this.pcost = '25000';

 }

 onClickMe3() {
  this.pname = 'TV';
  this.pcolor ='Black';
  this.pcost = '20000';

}

onClickMe4() {
  this.pname = 'Cooler';
  this.pcolor ='Red';
  this.pcost = '5000';

}

}
