import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-cadastro-projeto',
  templateUrl: 'cadastro-projeto.html',
})
export class CadastroProjetoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroProjetoPage');
  }

}
