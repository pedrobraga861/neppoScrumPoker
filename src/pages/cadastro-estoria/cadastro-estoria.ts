import {Component} from '@angular/core';
import {NavController, NavParams, MenuController} from 'ionic-angular';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

@Component({
  selector: 'page-cadastro-estoria',
  templateUrl: 'cadastro-estoria.html',
})
export class CadastroEstoriaPage {
  private form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public menuCtrl: MenuController) {
    menuCtrl.enable(false);

    this.form = fb.group({
      'titulo': [null, Validators.required],
      'descricao': [null, Validators.required]
    })
  }

  submit() {

  }

}
