import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

    model:string;
    name:string;
    speed:number;
    colors:Colors;
    options:string[];
    
    constructor() { }

    ngOnInit() {
        this.model = 'A3';
        this.name = 'Audi';
        this.speed = 110;
        this.colors = {
            car:'While',
            salon:'Black',
            wheels:'Silver'
        }
        this.options = ['ABS','Auto Parking','ESP'];
    }
}
interface Colors{
    car:string,
    salon:string,
    wheels:string
}
