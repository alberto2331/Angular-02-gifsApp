import { Component } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent {

  constructor(private gif:GifsService){}
  
  get resultados(){
    return this.gif.resultados;
  }
}
