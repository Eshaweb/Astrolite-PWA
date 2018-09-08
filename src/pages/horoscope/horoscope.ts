import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchOnMapPage } from '../search-on-map/search-on-map';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { MapsAPILoader } from '../../../node_modules/@agm/core';
import { SmartHttpClient } from '../../Services/shared/http-client/smart-httpclient.service';

@Component({
  selector: 'page-horoscope',
  templateUrl: 'horoscope.html'
})
export class HoroscopePage {
  horoscopeForm: FormGroup;
  latitude: number;
  longitude: number;
  timeZoneName: any;
  timeZoneId: any;
  lanuages=[{"Id":"E","Text":"English"},
  {"Id":"K","Text":"Kannada"},
  {"Id":"M","Text":"Malayalam"},
  {"Id":"H","Text":"Hindi"}];
  constructor(public smartHttpClient:SmartHttpClient, private ngZone: NgZone, private mapsAPILoader: MapsAPILoader, public formbuilder: FormBuilder, public navCtrl: NavController) {
    console.log('ionViewDidLoad GooglePlacesPage');
    this.mapsAPILoader.load().then(() => {
      let nativeHomeInputBox = document.getElementById('txtHome').getElementsByTagName('input')[0];
      let autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        this.getTimezone(this.latitude,this.longitude);
      }); 
      
    });
});
    this.horoscopeForm=this.formbuilder.group({
      name: ['shailesh', [Validators.required,Validators.minLength(6)]],
      fathername: ['Shailu', [Validators.required, Validators.minLength(3)]],
      mothername: ['President', [Validators.required, Validators.minLength(6)]],
      gothra: ['',[Validators.required]],
      Bdate: ['', [Validators.required]],
      bplace:['', [Validators.required]],
      language:['', [Validators.required]]
    });

  }
  getTimezone(lat, long) { 
    this.smartHttpClient.getTimezone(lat,long).subscribe((data:any)=>{
    var xxxx=data;
    this.timeZoneName=data.timeZoneName;
    this.timeZoneId=data.timeZoneId;
    });
  }
  OnKeyUp(event){
    if(event==null){
      this.timeZoneName=null;
    }
  }
  goToSearchOnMap(params){
    if (!params) params = {};
    this.navCtrl.push(SearchOnMapPage);
  }
}
