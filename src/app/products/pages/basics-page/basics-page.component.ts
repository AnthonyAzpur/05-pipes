import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {


  public nameLower : string = 'Anthony';
  public nameUpper : string = 'ANTHONY';
  public fullName : string = 'aNtHoNy AzPuR';



  public custonDate : Date = new Date();
  
}
