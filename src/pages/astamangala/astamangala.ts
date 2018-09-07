import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrashnoInputsPage } from '../prashno-inputs/prashno-inputs';

@Component({
  selector: 'page-astamangala',
  templateUrl: 'astamangala.html'
})
export class AstamangalaPage {

  constructor(public navCtrl: NavController) {
  }
  goToPrashnoInputs(params){
    if (!params) params = {};
    this.navCtrl.push(PrashnoInputsPage);
  }goToAstamangala(params){
    if (!params) params = {};
    this.navCtrl.push(AstamangalaPage);
  }
}
