import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {

  constructor(public navCtrl: NavController) {
  }
  goToPayment(params){
    if (!params) params = {};
    this.navCtrl.push(PaymentPage);
  }
}
