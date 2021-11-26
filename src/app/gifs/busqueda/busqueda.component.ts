import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{
  @ViewChild('txtBuscar') pene!:ElementRef;
  
  constructor( private gifsService: GifsService){
  }
  buscar(){
    console.log();
    const variable=this.pene.nativeElement.value;
    if(variable.trim().length===0){
      return;
    }
    this.gifsService.buscarGifs(variable);
    this.pene.nativeElement.value="";
  }
}
