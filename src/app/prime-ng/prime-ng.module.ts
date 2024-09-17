import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  exports: [
    MenuModule,
    InputIconModule,
    InputTextModule,
    MenubarModule,
    
  ]

})
export class PrimeNgModule { }
