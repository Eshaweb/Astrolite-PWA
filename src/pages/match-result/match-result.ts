import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FullHoroscopePage } from '../full-horoscope/full-horoscope';
import { DeliveryAddressPage } from '../delivery-address/delivery-address';
import { PaymentDetailsPage } from '../payment-details/payment-details';
import { PaymentGatewayPage } from '../payment-gateway/payment-gateway';
import { PaymentSuccessPage } from '../payment-success/payment-success';
import { MediumHoroscopePage } from '../medium-horoscope/medium-horoscope';

@Component({
  selector: 'page-match-result',
  templateUrl: 'match-result.html'
})
export class MatchResultPage {

  constructor(public navCtrl: NavController) {
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
  }
}
