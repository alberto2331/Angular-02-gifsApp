import { Component } from '@angular/core';

import { GifsService } from '../../gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent{

  get historial(){
    return this.gifServiceParaUsar.historial;
  }
  constructor(private gifServiceParaUsar:GifsService) { }

  rebuscar(item : string){
    this.gifServiceParaUsar.buscarGifs(item);
  }
}
