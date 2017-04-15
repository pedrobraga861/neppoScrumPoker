import {Component} from '@angular/core';
import {MenuController} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private formLogin: FormGroup;

  constructor(public fb: FormBuilder, public menuCtrl: MenuController) {
    menuCtrl.enable(false);

    this.formLogin = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }

  submit() {
    console.log(this.formLogin.value);
  }

}
