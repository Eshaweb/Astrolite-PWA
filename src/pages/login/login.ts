import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { UIService } from '../../Services/UIService/ui.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  mobilenoMessage: string;
  passwordMessage: string;

  constructor(public uiService: UIService, public formbuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.loginForm = this.formbuilder.group({
      mobileno: [null, [Validators.required, Validators.minLength(11)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
    const mobilenoContrl = this.loginForm.get('mobileno');
    mobilenoContrl.valueChanges.subscribe(value => this.setErrorMessage(mobilenoContrl));
  
    const passwordControl = this.loginForm.get('password');
    passwordControl.valueChanges.subscribe(value => this.setErrorMessage(passwordControl));
  }

  setErrorMessage(c: AbstractControl): void {
    this.mobilenoMessage = '';
    this.passwordMessage = '';
    let control = this.uiService.getControlName(c);
    if ((c.touched || c.dirty) && c.errors) {
        if (control === 'mobileno') {
            this.mobilenoMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
        }
        else if (control === 'password') {
            this.passwordMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
        }
    }
}
private validationMessages = {
    mobileno_required: 'Enter Mobile No',
    mobileno_minlength: 'Minimum length should be 10',

    password_required: 'Enter Password',
    password_minlength: 'Minimum length should be 3',
};

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
