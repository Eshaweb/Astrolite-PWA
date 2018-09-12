import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FullHoroscopePage } from '../pages/full-horoscope/full-horoscope';
import { DeliveryAddressPage } from '../pages/delivery-address/delivery-address';
import { PaymentDetailsPage } from '../pages/payment-details/payment-details';
import { PaymentGatewayPage } from '../pages/payment-gateway/payment-gateway';
import { PaymentSuccessPage } from '../pages/payment-success/payment-success';
import { MediumHoroscopePage } from '../pages/medium-horoscope/medium-horoscope';
import { MatchMakingPage } from '../pages/match-making/match-making';
import { MatchResultPage } from '../pages/match-result/match-result';
import { ServicesPage } from '../pages/services/services';
import { AstamangalaPage } from '../pages/astamangala/astamangala';
import { PrashnoInputsPage } from '../pages/prashno-inputs/prashno-inputs';
import { Horoscope2Page } from '../pages/horoscope2/horoscope2';
import { WalletPage } from '../pages/wallet/wallet';
import { DepositWalletPage } from '../pages/deposit-wallet/deposit-wallet';
import { DepositHistroyPage } from '../pages/deposit-histroy/deposit-histroy';
import { WalletStatementPage } from '../pages/wallet-statement/wallet-statement';
import { LastTransactionPage } from '../pages/last-transaction/last-transaction';
import { ProductPage } from '../pages/product/product';
import { OrderPage } from '../pages/order/order';
import { PaymentPage } from '../pages/payment/payment';
import { SettingsPage } from '../pages/settings/settings';
import { NithyaPanchangaPage } from '../pages/nithya-panchanga/nithya-panchanga';
import { NithyaPanchangaMorePage } from '../pages/nithya-panchanga-more/nithya-panchanga-more';


import { AstroliteMobilePage } from '../pages/astrolite-mobile/astrolite-mobile';
import { HomePage } from '../pages/home/home';
import { Company, Service } from '../Models/Company';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { HoroscopePage } from '../pages/horoscope/horoscope';
import { RegistrationPage } from '../pages/registration/registration';
import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any = HomePage;
  companies: Company[];
  information: any;
  yyyy: any;
  constructor(public http: HttpClient, private service: Service, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.companies = service.getCompanies();
    let localData = this.http.get('assets/information.json');
    this.service.getxx().subscribe((data) => {
      this.yyyy = data;
      this.information = this.yyyy.items;
    });

  }

  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
    if (this.information[i].children == null) {
      this.information[i].open = false;
      if (this.information[i].name == "Home") {
        this.navCtrl.setRoot(HomePage);
      }
      else if (this.information[i].name == "NithyaPanchanga") {
        this.navCtrl.setRoot(NithyaPanchangaPage);
      }
      else if (this.information[i].name == "Registration") {
        this.navCtrl.setRoot(RegistrationPage);
      }
      else if (this.information[i].name == "Login") {
        this.navCtrl.setRoot(LoginPage);
      }
    }
  }

  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
  goto(value) {
    var name=value+"Page";
    // var ppp=name.replace(/\"/g, "");
   //this.navCtrl.setRoot(name.replace(/\"/g,""));
    switch(name){
      case "HoroscopePage":
      this.navCtrl.push(HoroscopePage);
      break;
      case "Match MakingPage":
      this.navCtrl.push(MatchMakingPage);
      break;
      case "AstamangalaPage":
      this.navCtrl.push(AstamangalaPage);
      break;
      case "Deposit to walletPage":
      this.navCtrl.push(DepositWalletPage);
      break;
      case "HoroScopePage":
      this.navCtrl.push(HoroscopePage);
      break;
      case "RegistrationPage":
      this.navCtrl.push(RegistrationPage);
      break;
      case "LoginPage":
      this.navCtrl.push(LoginPage);
      default:
      this.navCtrl.push(HoroscopePage);
      break;
    }

  }
  goToHome(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  } goToFullHoroscope(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(FullHoroscopePage);
  } goToDeliveryAddress(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(DeliveryAddressPage);
  } goToPaymentDetails(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(PaymentDetailsPage);
  } goToPaymentGateway(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(PaymentGatewayPage);
  } goToPaymentSuccess(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(PaymentSuccessPage);
  } goToMediumHoroscope(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(MediumHoroscopePage);
  } goToMatchMaking(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(MatchMakingPage);
  } goToMatchResult(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(MatchResultPage);
  } goToServices(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(ServicesPage);
  } goToAstamangala(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(AstamangalaPage);
  } goToPrashnoInputs(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(PrashnoInputsPage);
  } goToHoroscope2(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(Horoscope2Page);
  } goToWallet(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(WalletPage);
  } goToDepositWallet(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(DepositWalletPage);
  } goToDepositHistroy(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(DepositHistroyPage);
  } goToWalletStatement(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(WalletStatementPage);
  } goToLastTransaction(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(LastTransactionPage);
  } goToProduct(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(ProductPage);
  } goToOrder(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(OrderPage);
  } goToPayment(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(PaymentPage);
  } goToSettings(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(SettingsPage);
  } goToNithyaPanchanga(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(NithyaPanchangaPage);
  } goToNithyaPanchangaMore(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(NithyaPanchangaMorePage);
  }
}
