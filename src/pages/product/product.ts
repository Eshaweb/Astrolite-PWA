import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderPage } from '../order/order';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {

  constructor(public navCtrl: NavController) {
  }
  goToOrder(params){
    if (!params) params = {};
    this.navCtrl.push(OrderPage);
  }goToPayment(params){
    if (!params) params = {};
    this.navCtrl.push(PaymentPage);
  }
}
