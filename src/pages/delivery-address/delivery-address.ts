import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaymentDetailsPage } from '../payment-details/payment-details';
import { PaymentGatewayPage } from '../payment-gateway/payment-gateway';
import { PaymentSuccessPage } from '../payment-success/payment-success';

@Component({
  selector: 'page-delivery-address',
  templateUrl: 'delivery-address.html'
})
export class DeliveryAddressPage {

  constructor(public navCtrl: NavController) {
  }
  goToPaymentDetails(params){
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
