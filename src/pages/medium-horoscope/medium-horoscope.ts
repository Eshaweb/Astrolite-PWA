import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeliveryAddressPage } from '../delivery-address/delivery-address';
import { PaymentDetailsPage } from '../payment-details/payment-details';
import { PaymentGatewayPage } from '../payment-gateway/payment-gateway';
import { PaymentSuccessPage } from '../payment-success/payment-success';

@Component({
  selector: 'page-medium-horoscope',
  templateUrl: 'medium-horoscope.html'
})
export class MediumHoroscopePage {

  constructor(public navCtrl: NavController) {
  }
  goToDeliveryAddress(params){
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
  }
}
