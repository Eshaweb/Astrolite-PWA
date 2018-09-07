import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AstamangalaPage } from '../astamangala/astamangala';

@Component({
  selector: 'page-prashno-inputs',
  templateUrl: 'prashno-inputs.html'
})
export class PrashnoInputsPage {

  constructor(public navCtrl: NavController) {
  }
  goToAstamangala(params){
    if (!params) params = {};
    this.navCtrl.push(AstamangalaPage);
  }goToPrashnoInputs(params){
    if (!params) params = {};
    this.navCtrl.push(PrashnoInputsPage);
  }
}
