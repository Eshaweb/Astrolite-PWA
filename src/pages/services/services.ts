import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MatchMakingPage } from '../match-making/match-making';
import { MatchResultPage } from '../match-result/match-result';
import { FullHoroscopePage } from '../full-horoscope/full-horoscope';
import { DeliveryAddressPage } from '../delivery-address/delivery-address';
import { PaymentDetailsPage } from '../payment-details/payment-details';
import { PaymentGatewayPage } from '../payment-gateway/payment-gateway';
import { PaymentSuccessPage } from '../payment-success/payment-success';
import { MediumHoroscopePage } from '../medium-horoscope/medium-horoscope';
import { AstamangalaPage } from '../astamangala/astamangala';
import { PrashnoInputsPage } from '../prashno-inputs/prashno-inputs';
import { Horoscope2Page } from '../horoscope2/horoscope2';

@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})
export class ServicesPage {

  constructor(public navCtrl: NavController) {
  }
  goToMatchMaking(params){
    if (!params) params = {};
    this.navCtrl.push(MatchMakingPage);
  }goToMatchResult(params){
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
  }goToAstamangala(params){
    if (!params) params = {};
    this.navCtrl.push(AstamangalaPage);
  }goToPrashnoInputs(params){
    if (!params) params = {};
    this.navCtrl.push(PrashnoInputsPage);
  }goToHoroscope2(params){
    if (!params) params = {};
    this.navCtrl.push(Horoscope2Page);
  }
}
