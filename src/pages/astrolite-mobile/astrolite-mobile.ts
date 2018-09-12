import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FullHoroscopePage } from '../full-horoscope/full-horoscope';
import { DeliveryAddressPage } from '../delivery-address/delivery-address';
import { PaymentDetailsPage } from '../payment-details/payment-details';
import { PaymentGatewayPage } from '../payment-gateway/payment-gateway';
import { PaymentSuccessPage } from '../payment-success/payment-success';
import { MediumHoroscopePage } from '../medium-horoscope/medium-horoscope';
import { MatchMakingPage } from '../match-making/match-making';
import { MatchResultPage } from '../match-result/match-result';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'page-astrolite-mobile',
  templateUrl: 'astrolite-mobile.html'
})
export class AstroliteMobilePage {
  horoscopeForm: FormGroup;
  MatchMakingForm: FormGroup;
  femaleMatchMakingForm: FormGroup;
  
  constructor(public formbuilder: FormBuilder, public navCtrl: NavController) {
    this.horoscopeForm=this.formbuilder.group({
      name: ['Shamanth', [Validators.required,Validators.minLength(4)]],
      fathername: ['Rajesh', [Validators.required, Validators.minLength(4)]],
      mothername: ['Leelavathi', [Validators.required, Validators.minLength(4)]],
      gothra: ['Vasista',[Validators.required, Validators.minLength(4)]],
      Bdate: ['', [Validators.required]],
      bplace:['', [Validators.required]],
      language:['', [Validators.required]]
    });
    this.MatchMakingForm=this.formbuilder.group({
      maleName: ['Shamanth', [Validators.required,Validators.minLength(4)]],
      MaleBdate: ['', [Validators.required]],
      MaleBplace:['', [Validators.required]],
      femaleName: ['Shamanth', [Validators.required,Validators.minLength(4)]],
      FemaleBdate: ['', [Validators.required]],
      FemaleBplace:['', [Validators.required]]
    });
    // this.femaleMatchMakingForm=this.formbuilder.group({
    //   femaleName: ['Shamanth', [Validators.required,Validators.minLength(4)]],
    //   FemaleBdate: ['', [Validators.required]],
    //   FemaleBplace:['', [Validators.required]]
    // });
  }
  goToFullHoroscope(params){
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
  }goToMatchMaking(params){
    if (!params) params = {};
    this.navCtrl.push(MatchMakingPage);
  }goToMatchResult(params){
    if (!params) params = {};
    this.navCtrl.push(MatchResultPage);
  }
}
