import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchOnMapPage } from '../search-on-map/search-on-map';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'page-horoscope',
  templateUrl: 'horoscope.html'
})
export class HoroscopePage {
  horoscopeForm: FormGroup;

  constructor(public formbuilder: FormBuilder, public navCtrl: NavController) {
    this.horoscopeForm=this.formbuilder.group({
      customerID: [1, [Validators.required, Validators.minLength(1)]],
      name: ['shailesh', [Validators.required,Validators.minLength(6)]],
      shortName: ['Shailu', [Validators.required, Validators.minLength(3)]],
      president: ['President', [Validators.required, Validators.minLength(6)]],
      custType: ['',[Validators.required]],
      marketedBy: ['', [Validators.required]],
      isCentral:[true]
    });
  }
  goToSearchOnMap(params){
    if (!params) params = {};
    this.navCtrl.push(SearchOnMapPage);
  }
}
