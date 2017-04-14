import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private formLogin: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.formLogin = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }

  submit() {
    console.log(this.formLogin.value);
  }

}
