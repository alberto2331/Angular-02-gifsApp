import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../Interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey:string='sXnJ1n04p803BIoo4txfMr8tmanhKJdg';
  private _historial:string[]=[];
  public resultados: Gif[]=[];
  get historial(){
    return [...this._historial];
  }

  constructor ( private http:HttpClient){    
    this._historial = JSON.parse(localStorage.getItem('historial') ! ) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados') ! ) || [];
  }
  buscarGifs(query:string){
    query=query.trim().toLocaleLowerCase();
    if(!this._historial.includes( query)){
      this._historial.unshift(query); 
      this._historial=this._historial.splice(0,10);
      localStorage.setItem('historial',JSON.stringify(this._historial));
    }
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=sXnJ1n04p803BIoo4txfMr8tmanhKJdg&q=${query}&limit=10`)
      .subscribe((res)=>{
        console.log(res.data)
        this.resultados=res.data;
        localStorage.setItem('resultados',JSON.stringify(this.resultados));
      })
  }
}
