import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaymentSuccessPage } from '../payment-success/payment-success';

@Component({
  selector: 'page-payment-gateway',
  templateUrl: 'payment-gateway.html'
})
export class PaymentGatewayPage {

  constructor(public navCtrl: NavController) {
  }
  goToPaymentSuccess(params){
    if (!params) params = {};
    this.navCtrl.push(PaymentSuccessPage);
  }
}
