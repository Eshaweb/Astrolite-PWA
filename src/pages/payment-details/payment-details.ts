import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaymentGatewayPage } from '../payment-gateway/payment-gateway';
import { PaymentSuccessPage } from '../payment-success/payment-success';

@Component({
  selector: 'page-payment-details',
  templateUrl: 'payment-details.html'
})
export class PaymentDetailsPage {

  constructor(public navCtrl: NavController) {
  }
  goToPaymentGateway(params){
    if (!params) params = {};
    this.navCtrl.push(PaymentGatewayPage);
  }goToPaymentSuccess(params){
    if (!params) params = {};
    this.navCtrl.push(PaymentSuccessPage);
  }
}
