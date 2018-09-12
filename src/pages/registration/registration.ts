import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '../../../node_modules/@angular/forms';
import notify from 'devextreme/ui/notify';
import { UIService } from '../../Services/UIService/ui.service';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  registrationForm: FormGroup;
  mobilenoMessage: string;
  emailMessage: string;
  passwordMessage: string;
  confirm_PasswordMessage: string;
  deleteButtonOptions: any;
  applyButtonOptions: any;
    refCodeMessage: string;

  constructor(public formbuilder: FormBuilder, public uiService: UIService, public navCtrl: NavController, public navParams: NavParams) {
    this.registrationForm = this.formbuilder.group({
      mobileno: [null, [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.required,Validators.pattern("[^ @]*@[^ @]*"),Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirm_Password: ['', [Validators.required, Validators.minLength(4)]],
      refCode:['', [Validators.minLength(6)]]
    }, { validator: this.matchingPasswords });

    const mobilenoContrl = this.registrationForm.get('mobileno');
    mobilenoContrl.valueChanges.subscribe(value => this.setErrorMessage(mobilenoContrl));
  
    const emailContrl = this.registrationForm.get('email');
    emailContrl.valueChanges.subscribe(value => this.setErrorMessage(emailContrl));
  
    const passwordControl = this.registrationForm.get('password');
    passwordControl.valueChanges.subscribe(value => this.setErrorMessage(passwordControl));
  
    const confirm_PasswordControl = this.registrationForm.get('confirm_Password');
    confirm_PasswordControl.valueChanges.subscribe(value => this.setErrorMessage(confirm_PasswordControl));

    const refCodeControl = this.registrationForm.get('refCode');
    refCodeControl.valueChanges.subscribe(value => this.setErrorMessage(refCodeControl));
  
    this.applyButtonOptions = {
      text: "Save",
      type: "success",
      onClick(){
        var customerModel={
              AISCustCode:this.customerForm.get('customerID').value,
              ShortName:this.customerForm.get('shortName').value,
              CustType:this.customerForm.get('custType').value,
              President:this.customerForm.get('president').value,
              MrktBy:this.customerForm.get('marketedBy').value,
              IsCore:1 
          }
          this.customerService.onClick(customerModel);
      }
  };
  this.deleteButtonOptions = {
      text: "Cancel",
      type: "danger",
      onClick: function (e) {
          notify("The Delete button was clicked");
      }
  };
  }
  setErrorMessage(c: AbstractControl): void {
    this.mobilenoMessage = '';
    this.emailMessage = '';
    this.passwordMessage = '';
    this.confirm_PasswordMessage = '';
    this.refCodeMessage='';
    let control = this.uiService.getControlName(c);
    if ((c.touched || c.dirty) && c.errors) {
        if (control === 'mobileno') {
            this.mobilenoMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
        }
        else if (control === 'email') {
            this.emailMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
        }
        else if (control === 'password') {
            this.passwordMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
        }
        else if (control === 'confirm_Password') {
            this.confirm_PasswordMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
        }
        else if (control === 'refCode') {
            this.refCodeMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
        }
    }
}
private validationMessages = {
    mobileno_required: 'Enter Mobile No',
    mobileno_minlength: 'Minimum length should be 10',

    email_required: 'Enter EMail',
    email_minlength: 'Minimum length should be 6',
    email_pattern:'Do not match with EMail pattern',

    password_required: 'Enter Password',
    password_minlength: 'Minimum length should be 3',

    confirm_Password_required: 'Re-Enter Password',
    confirm_Password_minlength: 'Minimum length should be 3',

    refCode_minlength: 'Minimum length should be 6'

};
matchingPasswords(group: FormGroup) { // here we have the 'passwords' group
    let password = group.controls.password.value;
    let confirmpwd = group.controls.confirm_Password.value;
    if (!password || !confirmpwd) {
      return null;
    }
    return password === confirmpwd ? null : { notSame: true }
  }

  onClick(){
    var customerModel={
          AISCustCode:this.registrationForm.get('customerID').value,
          ShortName:this.registrationForm.get('shortName').value,
          CustType:this.registrationForm.get('custType').value,
          President:this.registrationForm.get('president').value
      }
      //this.customerService.onClick(customerModel);
  }

}
