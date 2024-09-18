import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  public name: string = 'Anthony';
  public gender : 'male'| 'famele' = 'male';
  public invitationMap ={
    male:' invitarlo',
    famele: 'invitarla'
  }


  changeClient():void {
    this.name = 'melissa';
    this.gender= 'famele';
  }
//18nplural
public clients: string[]= ['Maria','pedro','fernaando','anthony','candy','lorena','rocio',]
public clientsMap = {
  '=0':'no tenenmos ningun cliente',
  '=1' :'tenemos 1 cliente esperando',
  '=2' :'tenemos 2 clientes esperando',
  'other' :'tenemos # clientes esperando',



}

  deleteClient(): void {
    this.clients.shift();
  }

  //keyValue pipe
  public person ={
    name: 'fernando',
    age:36,
    address: 'ottawa,Canada'
  }
//Async Pipe
public myObservableTimer = interval(2000).pipe(
  tap( value => console.log('tap:',value ))
);

}
