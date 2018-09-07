import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UIService } from '../../Services/UIService/ui.service';
import { SmartHttpClient, IRequestOptions } from '../../Services/shared/http-client/smart-httpclient.service';

@Component({
  selector: 'page-deposit-wallet',
  templateUrl: 'deposit-wallet.html'
})
export class DepositWalletPage {
  depositToWalletForm: FormGroup;
  showError: boolean = false;
  walletAmount: number;
  bonusAmount: number;
  amountMessage: string;
  paymentModes: any;

  constructor(public smartHttpClient: SmartHttpClient, public uiService: UIService, public formbuilder: FormBuilder, public navCtrl: NavController) {
    this.depositToWalletForm = this.formbuilder.group({
      // amount: [null, [Validators.required, Validators.minLength(1),Validators.pattern("^[a-z0-9_-]{8,15}$"),Validators.min(50),Validators.max(20000)]],
      amount: [null, [Validators.required, Validators.pattern("[50<>20000]=?|="), Validators.min(50), Validators.max(20000)]],
    });
    const amountContrl = this.depositToWalletForm.get('amount');
    amountContrl.valueChanges.subscribe(value => this.setErrorMessage(amountContrl));
  }
  setErrorMessage(c: AbstractControl): void {
    this.amountMessage = '';
    let control = this.uiService.getControlName(c);
    if ((c.touched || c.dirty) && c.errors) {
      if (control === 'amount') {
        this.amountMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      }
    }
  }
  private validationMessages = {
    mobileno_required: 'Enter Mobile No',
    mobileno_minlength: 'Minimum length should be 10',

    amount_required: 'Enter EMail',
    amount_pattern: 'Do not match with pattern',
    amount_min: "Minimum Amount is 50",
    amount_max: "Maximum Amount is 20000",

    password_required: 'Enter Password',
    password_minlength: 'Minimum length should be 3',

    confirm_Password_required: 'Re-Enter Password',
    confirm_Password_minlength: 'Minimum length should be 3',

  };
  onClick() {
    var endPoint = "Sales/GetPayCodes";
    // const options:IRequestOptions={
    //   headers: '',
    //   observe:'body',
    //   params:'HttpParams',
    //   reportProgress:true,
    //   responseType:'json',
    //   withCredentials:false,
    //   body:'any'
    // }
    // this.smartHttpClient.GetPayCodes().subscribe((data: any) => {
    //   this.paymentModes = data;
    // });
    this.smartHttpClient.Get(endPoint).subscribe((data: any) => {
      this.paymentModes = data;
    });
  }
  onAmount(value) {
    if (value < 50 || value > 20000) {
      this.showError = true;
      this.walletAmount = null;
      this.bonusAmount = null;
    }
    else {
      this.showError = false;
      var a = 30;
      var b = 70;
      var c = 50
      var d = 20000;
      var e = d / c;
      var f = b - a;
      var g = f / e;
      var h = (value / c) * g + a;
      var i = value * ((h / 100) + 1);
      this.walletAmount = i;
      this.bonusAmount = i - value;
    }
  }
}
