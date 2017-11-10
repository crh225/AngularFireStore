import { Component } from '@angular/core';;
import { Observable } from 'rxjs/Observable';
import { NgModel, NgForm } from '@angular/forms';

export interface Person { 
  name: string; 
  age: number;
  street: string,
  car: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   item: Person;

  constructor() {
    this.item = { name : '', age : 0, street : '', car : '' }
  }

  onSubmit(f: NgForm) {
    //note you can see the entire object
    console.log(f.value);
    this.incrementAge(f.value);
  }

  incrementAge( { age, car } ){
    console.log(age + '' + car);
    this.item.age = Number(age) + 1;
    this.item.car = "red";
  }

}
