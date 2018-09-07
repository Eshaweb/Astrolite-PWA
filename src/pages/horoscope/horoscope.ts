import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchOnMapPage } from '../search-on-map/search-on-map';

@Component({
  selector: 'page-horoscope',
  templateUrl: 'horoscope.html'
})
export class HoroscopePage {

  constructor(public navCtrl: NavController) {
  }
  goToSearchOnMap(params){
    if (!params) params = {};
    this.navCtrl.push(SearchOnMapPage);
  }
}
