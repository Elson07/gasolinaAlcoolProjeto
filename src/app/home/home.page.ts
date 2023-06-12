import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public precoAlcool: number = NaN;
  public precoGasolina: number = NaN;;
  public resultado: String = ""


  calcular(){
    if( this.precoAlcool && this.precoGasolina ){
      
      if( this.precoAlcool/this.precoGasolina >= 0.7){
        this.resultado = "Melhor utilizar Gasolina"
      }else{
        this.resultado = "Melhor utilizar Álcool"
      }

    }else{
      this.resultado = "Preencha corretamente os campos!" 
    }
  }
}
