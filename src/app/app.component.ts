import { Component } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  getName(){
  return'Angular';
}

   //title: string ='Formation Angular' 
  // title1 = [1,2,3];
  
  constructor(){
  }
   //constructor(){
    //console.log(this.title);
  //}
}
