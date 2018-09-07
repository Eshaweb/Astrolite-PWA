import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DepositWalletPage } from '../deposit-wallet/deposit-wallet';
import { DepositHistroyPage } from '../deposit-histroy/deposit-histroy';
import { WalletStatementPage } from '../wallet-statement/wallet-statement';
import { LastTransactionPage } from '../last-transaction/last-transaction';

@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html'
})
export class WalletPage {

  constructor(public navCtrl: NavController) {
  }
  goToDepositWallet(params){
    if (!params) params = {};
    this.navCtrl.push(DepositWalletPage);
  }goToDepositHistroy(params){
    if (!params) params = {};
    this.navCtrl.push(DepositHistroyPage);
  }goToWalletStatement(params){
    if (!params) params = {};
    this.navCtrl.push(WalletStatementPage);
  }goToLastTransaction(params){
    if (!params) params = {};
    this.navCtrl.push(LastTransactionPage);
  }
}
