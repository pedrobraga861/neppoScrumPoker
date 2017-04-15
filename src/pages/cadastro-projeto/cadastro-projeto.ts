import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-cadastro-projeto',
  templateUrl: 'cadastro-projeto.html',
})
export class CadastroProjetoPage {

  cartas = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cartas = [0, "1/2", 1, 2, 3];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroProjetoPage');
  }

}
