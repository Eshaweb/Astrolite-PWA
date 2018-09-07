import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AstroliteMobilePage } from '../astrolite-mobile/astrolite-mobile';
import { ServicesPage } from '../services/services';
import { ProductPage } from '../product/product';
import { NithyaPanchangaPage } from '../nithya-panchanga/nithya-panchanga';
import { WalletPage } from '../wallet/wallet';
import { SettingsPage } from '../settings/settings';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  Settings: string;
  Wallet: string;
  NithyaPanchanga: string;
  Product: string;
  Services: string;
  AstroliteMobile: string;
  AstroliteMobilePage = AstroliteMobilePage;
  ServicesPage= ServicesPage;
  ProductPage= ProductPage;
  NithyaPanchangaPage = NithyaPanchangaPage;
  WalletPage= WalletPage;
  SettingsPage= SettingsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.AstroliteMobile="Home";
    this.Services="Services";
    this.Product="Product";
    this.NithyaPanchanga="Panchanga";
    this.Wallet="Wallet";
    this.Settings="Settings";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
