import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from '../../model/noticias';

/**
 * Generated class for the NoticiaConteudoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticia-conteudo',
  templateUrl: 'noticia-conteudo.html',
})
export class NoticiaConteudoPage {

  noticia : Noticia;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.noticia = this.navParams.get('noticia');
 }

}
