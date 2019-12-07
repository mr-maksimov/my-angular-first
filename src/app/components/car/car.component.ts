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
    isEdit:boolean = false;
    
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
    
    showEdit(){
        this.isEdit = !this.isEdit;
    }
    
    addOption(option){
        this.options.unshift(option);
        return false;
    }
    
    delOption(option){
        for (let i = 0; i < this.options.length; i++){
            if (this.options[i] == option){
                this.options.splice(i, 1);
                break;
            }
        }
    }
    
    carSelect(carName){
        if(carName == 'BMW'){
            this.model = 'M3';
            this.name = 'BMW';
            this.speed = 90;
            this.colors = {
                car:'Blue',
                salon:'Black',
                wheels:'Silver'
            }
            this.options = ['ABS','Auto Parking'];
        }else if(carName == 'Audi'){
            this.model = 'A3';
            this.name = 'Audi';
            this.speed = 110;
            this.colors = {
                car:'While',
                salon:'Black',
                wheels:'Silver'
            }
            this.options = ['Auto Parking','ESP'];
        }else if(carName == 'Mersedes'){
            this.model = 'E200';
            this.name = 'Mersedes';
            this.speed = 100;
            this.colors = {
                car:'Black',
                salon:'Black',
                wheels:'Silver'
            }
            this.options = ['Круиз контроль'];
        }
    }
}
interface Colors{
    car:string,
    salon:string,
    wheels:string
}
