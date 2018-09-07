import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MatchResultPage } from '../match-result/match-result';
import { FullHoroscopePage } from '../full-horoscope/full-horoscope';
import { DeliveryAddressPage } from '../delivery-address/delivery-address';
import { PaymentDetailsPage } from '../payment-details/payment-details';
import { PaymentGatewayPage } from '../payment-gateway/payment-gateway';
import { PaymentSuccessPage } from '../payment-success/payment-success';
import { MediumHoroscopePage } from '../medium-horoscope/medium-horoscope';

@Component({
  selector: 'page-match-making',
  templateUrl: 'match-making.html'
})
export class MatchMakingPage {

  constructor(public navCtrl: NavController) {
  }
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
