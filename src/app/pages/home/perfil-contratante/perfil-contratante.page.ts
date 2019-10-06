import { PerfilContratanteService } from './../../../services/perfil-contratante.service';
import { PerfilContratante } from './../../../interfaces/perfil-contratante';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-contratante',
  templateUrl: './perfil-contratante.page.html',
  styleUrls: ['./perfil-contratante.page.scss'],
})
export class PerfilContratantePage implements OnInit {

  public perfis = new Array<PerfilContratante>();
  private perfilsSubscription: Subscription;
  private productId: string = null;
  private activeRoute: ActivatedRoute

  constructor(private perfilContratanteService: PerfilContratanteService) {
    // this.perfilsSubscription = this.perfilContratanteService.getPerfils().subscribe(data => {
    //   this.perfis = data;
    //})

}

    ngOnInit() {
    }



    // ngOnDestroy() {
    //   this.perfilsSubscription.unsubscribe();
    // }
  
}
