import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from '../../model/noticias';


@IonicPage()
@Component({
  selector: 'page-noticias-detalhe',
  templateUrl: 'noticias-detalhe.html',
})
export class NoticiasDetalhePage {

  noticia : Noticia;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.noticia = this.navParams.get('noticias');
  }

}
