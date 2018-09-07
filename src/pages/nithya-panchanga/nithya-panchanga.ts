import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NithyaPanchangaMorePage } from '../nithya-panchanga-more/nithya-panchanga-more';

@Component({
  selector: 'page-nithya-panchanga',
  templateUrl: 'nithya-panchanga.html'
})
export class NithyaPanchangaPage {

  constructor(public navCtrl: NavController) {
  }
  goToNithyaPanchangaMore(params){
    if (!params) params = {};
    this.navCtrl.push(NithyaPanchangaMorePage);
  }
}
