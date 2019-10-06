import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AvaliacaoPontuacaoContratantePage } from './avaliacao-pontuacao-contratante.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliacaoPontuacaoContratantePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AvaliacaoPontuacaoContratantePage]
})
export class AvaliacaoPontuacaoContratantePageModule {}
