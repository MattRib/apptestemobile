import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiaConteudoPage } from './noticia-conteudo';

@NgModule({
  declarations: [
    NoticiaConteudoPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticiaConteudoPage),
  ],
})
export class NoticiaConteudoPageModule {}
