import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Validators, FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'page-cadastro-projeto',
  templateUrl: 'cadastro-projeto.html',
})
export class CadastroProjetoPage {
  form: FormGroup;
  cartas = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.cartas = [0, "1/2", 1, 2, 3, 5, 8, 13, 20, 40, 100, "?"];

    this.form = fb.group({
      'nome': [null, Validators.required],
      'descricao': [null, Validators.required]
    })
  }

  submite() {

  }

}
