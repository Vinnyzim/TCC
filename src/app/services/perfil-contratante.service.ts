import { PerfilContratante } from './../interfaces/perfil-contratante';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PerfilContratanteService {

  private perfilContratanteCollection: AngularFirestoreCollection<PerfilContratante>;



  constructor(private afs: AngularFirestore) {
    this.perfilContratanteCollection = this.afs.collection<PerfilContratante>('Perfil-Contratante');
  }

  getPerfils() {
    return this.perfilContratanteCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data= a.payload.doc.data();
          const id= a.payload.doc.id;

          return {id, ...data};
        })
      })
    )
  }

  addPerfil(perfil: PerfilContratante){
    return this.perfilContratanteCollection.add(perfil);

  }

  getPerfil(id: string) {
    return this.perfilContratanteCollection.doc<PerfilContratante>(id).valueChanges();
  }

  updatePerfil(id: string, perfilContratanteCollection: PerfilContratante) {

  }

  deletePerfil(id: string) {

  }

}
