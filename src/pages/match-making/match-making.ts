import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MatchResultPage } from '../match-result/match-result';
import { FullHoroscopePage } from '../full-horoscope/full-horoscope';
import { DeliveryAddressPage } from '../delivery-address/delivery-address';
import { PaymentDetailsPage } from '../payment-details/payment-details';
import { PaymentGatewayPage } from '../payment-gateway/payment-gateway';
import { PaymentSuccessPage } from '../payment-success/payment-success';
import { MediumHoroscopePage } from '../medium-horoscope/medium-horoscope';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { UIService } from '../../Services/UIService/ui.service';
import { SmartHttpClient } from '../../Services/shared/http-client/smart-httpclient.service';

@Component({
  selector: 'page-match-making',
  templateUrl: 'match-making.html'
})
export class MatchMakingPage {
  maleMatchMakingForm:FormGroup;
  femaleMatchMakingForm: FormGroup;
  maleNameMessage: string;
  MaleBdateMessage: string;
  MaleBplaceMessage: string;
  femaleNameMessage: string;
  FemaleBdateMessage: string;
  FemaleBplaceMessage: string;

  constructor(public uiService: UIService, public smartHttpClient:SmartHttpClient,public formbuilder: FormBuilder, public navCtrl: NavController) {
    this.maleMatchMakingForm=this.formbuilder.group({
      maleName: ['Shamanth', [Validators.required,Validators.minLength(4)]],
      MaleBdate: ['', [Validators.required]],
      MaleBplace:['', [Validators.required]]
    });
    const maleNameContrl = this.maleMatchMakingForm.get('maleName');
    maleNameContrl.valueChanges.subscribe(value => this.setErrorMessage(maleNameContrl));
    const MaleBdateContrl = this.maleMatchMakingForm.get('MaleBdate');
    MaleBdateContrl.valueChanges.subscribe(value => this.setErrorMessage(MaleBdateContrl));
    const MaleBplaceContrl = this.maleMatchMakingForm.get('MaleBplace');
    MaleBplaceContrl.valueChanges.subscribe(value => this.setErrorMessage(MaleBplaceContrl));
    this.femaleMatchMakingForm=this.formbuilder.group({
      femaleName: ['Shamanth', [Validators.required,Validators.minLength(4)]],
      FemaleBdate: ['', [Validators.required]],
      FemaleBplace:['', [Validators.required]]
    });
    const femaleNameContrl = this.femaleMatchMakingForm.get('femaleName');
    femaleNameContrl.valueChanges.subscribe(value => this.setErrorMessage(femaleNameContrl));
    const FemaleBdateContrl = this.femaleMatchMakingForm.get('FemaleBdate');
    FemaleBdateContrl.valueChanges.subscribe(value => this.setErrorMessage(FemaleBdateContrl));
    const FemaleBplaceContrl = this.femaleMatchMakingForm.get('FemaleBplace');
    FemaleBplaceContrl.valueChanges.subscribe(value => this.setErrorMessage(FemaleBplaceContrl));
  }
  setErrorMessage(c: AbstractControl): void {
    this.maleNameMessage = '';//To not display the error message, if there is no error.
    this.MaleBdateMessage = '';
    this.MaleBplaceMessage = '';
    this.femaleNameMessage = '';
    this.FemaleBdateMessage = '';
    this.FemaleBplaceMessage = '';
    let control = this.uiService.getControlName(c);//gives the control name property from particular service.
    if ((c.touched || c.dirty) && c.errors) {
      if (control === 'maleName') {
        this.maleNameMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      //maps the error message from validationMessages array. 
      }
      else if (control === 'MaleBdate') {
        this.MaleBdateMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      }
      else if (control === 'MaleBplace') {
        this.MaleBplaceMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      }
      else if (control === 'femaleName') {
        this.femaleNameMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      }
      else if (control === 'FemaleBdate') {
        this.FemaleBdateMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      }
      else if (control === 'FemaleBplace') {
        this.FemaleBplaceMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      }
    }
  }
  private validationMessages = { //used in above method.
    maleName_required: '*Enter Name',
    maleName_minlength: '*Minimum length is 4',

    femaleName_required: '*Enter Father Name',
    femaleName_minlength: '*Minimum length is 4',

    MaleBdate_required: '*Enter Mother Name',

    FemaleBdate_required: '*Enter Gothra',

    MaleBplace_required: '*Select Date of Birth',

    FemaleBplace_required: '*Enter Birth Place'

  };

  goToMatchResult(params){
    if (!params) params = {};
    this.navCtrl.push(MatchResultPage);
  }goToFullHoroscope(params){
    if (!params) params = {};
    this.navCtrl.push(FullHoroscopePage);
  }goToDeliveryAddress(params){
    if (!params) params = {};
    this.navCtrl.push(DeliveryAddressPage);
  }goToPaymentDetails(params){
    if (!params) params = {};
    this.navCtrl.push(PaymentDetailsPage);
  }goToPaymentGateway(params){
    if (!params) params = {};
    this.navCtrl.push(PaymentGatewayPage);
  }goToPaymentSuccess(params){
    if (!params) params = {};
    this.navCtrl.push(PaymentSuccessPage);
  }goToMediumHoroscope(params){
    if (!params) params = {};
    this.navCtrl.push(MediumHoroscopePage);
  }
}
