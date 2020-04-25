import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-magaz',
  templateUrl: './magaz.component.html',
  styleUrls: ['./magaz.component.css']
})
export class MagazComponent implements OnInit {

  prise: namber;
  name: string;
  speed: namber;
  model:string;
  colors:Colors;
  options:srting[];
  isEdit:boolean = false;

  constructor() { }



  addOpt(option) {
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option){
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] == option){
        this.options.splice(i,1);
        break;
      }
    }
  }

  ngOnInit(): void {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.prise = 6850000;
    this.colors ={
      car:'Белый',
      salon:'красный',
      wheels:'Черный'
    };
    this.options = ["ABS","Parking", "Auto Pilot"];
  }

  showEdit(){
    this.isEdit = !this.isEdit;
  }

  showEdit1(){
    this.isEdit = !this.isEdit;
  }

carSelect(carName) {
  if (carName=='bmw') {
  this.name = 'BMW';
  this.speed = 285;
  this.model = 'X5M';
  this.prise = 1286000;
  this.colors = {
    car:'Белый',
    salon:'Синий',
    wheels:'Черный'
  };
  this.options = ["ABS","Parking", "Auto Pilot"];
}else if (carName=='audi') {
  this.name = 'Audi';
  this.speed = 235;
  this.model = 'RS8';
  this.prise = 6850000;
  this.colors ={
    car:'Белый',
    salon:'красный',
    wheels:'Черный'
  };
  this.options = ["ABS","Parking", "Auto Pilot","Круиз контроль"];
}else if (carName=='mer') {
  this.name = 'Mersedes';
  this.speed = 280;
  this.model = 'Maybach';
  this.prise = 17560000;
  this.colors ={
    car:'Белый',
    salon:'Красный',
    wheels:'Черный'
  };
  this.options = ["ABS","Parking", "Auto Pilot","Массаж кресел"];
            }
        }
}




interface Colors {
    car: string;
    salon:string;
    wheels:string;
}
