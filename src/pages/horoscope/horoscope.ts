import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchOnMapPage } from '../search-on-map/search-on-map';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '../../../node_modules/@angular/forms';
import { MapsAPILoader } from '../../../node_modules/@agm/core';
import { SmartHttpClient } from '../../Services/shared/http-client/smart-httpclient.service';
import { UIService } from '../../Services/UIService/ui.service';

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
  {"Id":"H","Text":"Hindi"},
  {"Id":"K","Text":"Kannada"},
  {"Id":"M","Text":"Malayalam"}];
  nameMessage: string;
  fathernameMessage: string;
  mothernameMessage: string;
  gothraMessage: string;
  BdateMessage: string;
  bplaceMessage: string;
  languageMessage: string;
  constructor(public uiService: UIService, public smartHttpClient:SmartHttpClient, private ngZone: NgZone, private mapsAPILoader: MapsAPILoader, public formbuilder: FormBuilder, public navCtrl: NavController) {
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
      name: ['Shamanth', [Validators.required,Validators.minLength(4)]],
      fathername: ['Rajesh'],
      mothername: ['Leelavathi'],
      gothra: ['Vasista'],
      Bdate: ['', [Validators.required]],
      bplace:['', [Validators.required]],
      language:['', [Validators.required]]
    });
    const nameContrl = this.horoscopeForm.get('name');
    nameContrl.valueChanges.subscribe(value => this.setErrorMessage(nameContrl));
    // const fathernameContrl = this.horoscopeForm.get('fathername');
    // fathernameContrl.valueChanges.subscribe(value => this.setErrorMessage(fathernameContrl));
    // const mothernameContrl = this.horoscopeForm.get('mothername');
    // mothernameContrl.valueChanges.subscribe(value => this.setErrorMessage(mothernameContrl));
    // const gothraContrl = this.horoscopeForm.get('gothra');
    // gothraContrl.valueChanges.subscribe(value => this.setErrorMessage(gothraContrl));
    const BdateContrl = this.horoscopeForm.get('Bdate');
    BdateContrl.valueChanges.subscribe(value => this.setErrorMessage(BdateContrl));
    const bplaceContrl = this.horoscopeForm.get('bplace');
    bplaceContrl.valueChanges.subscribe(value => this.setErrorMessage(bplaceContrl));
    const languageContrl = this.horoscopeForm.get('language');
    languageContrl.valueChanges.subscribe(value => this.setErrorMessage(languageContrl));
  }
  setErrorMessage(c: AbstractControl): void {
    this.nameMessage = '';//To not display the error message, if there is no error.
    this.fathernameMessage = '';
    this.mothernameMessage = '';
    this.gothraMessage = '';
    this.BdateMessage = '';
    this.bplaceMessage = '';
    this.languageMessage = '';
    let control = this.uiService.getControlName(c);//gives the control name property from particular service.
    if ((c.touched || c.dirty) && c.errors) {
      if (control === 'name') {
        this.nameMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      //maps the error message from validationMessages array. 
      }
      // else if (control === 'fathername') {
      //   this.fathernameMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      // }
      // else if (control === 'mothername') {
      //   this.mothernameMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      // }
      // else if (control === 'gothra') {
      //   this.gothraMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      // }
      else if (control === 'Bdate') {
        this.BdateMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      }
      else if (control === 'bplace') {
        this.bplaceMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      }
      else if (control === 'language') {
        this.languageMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      }
    }
  }
  private validationMessages = { //used in above method.
    name_required: '*Enter Name',
    name_minlength: '*Minimum length is 4',

    // fathername_required: '*Enter Father Name',
    // fathername_minlength: '*Minimum length is 4',

    // mothername_required: '*Enter Mother Name',
    // mothername_minlength: '*Minimum length is 4',

    // gothra_required: '*Enter Gothra',
    // gothra_minlength: '*Minimum length is 4',

    Bdate_required: '*Select Date of Birth',

    bplace_required: '*Enter Birth Place',

    language_required: '*Select Language',

  };
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
