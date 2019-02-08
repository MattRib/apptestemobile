import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticiaService } from '../../services/noticias.service';
import { Noticia } from '../../model/noticias';
import { Categoria } from '../../model/categoria';

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  categoria : Categoria[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public noticiasService: NoticiaService) {
  }

  ionViewDidLoad() {
    this.noticiasService.getNoticias().subscribe(response => {
      this.categoria = response;
      console.log(response);
    });
  }

  detalhes(n : Noticia){
    this.navCtrl.push('NoticiasDetalhePage',{'noticia': n});
  }

}
