import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiasDetalhePage } from './noticias-detalhe';

@NgModule({
  declarations: [
    NoticiasDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(NoticiasDetalhePage),
  ],
})
export class NoticiasDetalhePageModule {}
