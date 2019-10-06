import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { PerfilContratanteService } from 'src/app/services/perfil-contratante.service';
import { PerfilContratante } from 'src/app/interfaces/perfil-contratante';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-contratante',
  templateUrl: './cadastro-contratante.page.html',
  styleUrls: ['./cadastro-contratante.page.scss'],
})
export class CadastroContratantePage implements OnInit {

  public userRegister: User = {};
  private loading: any;

  navCtrl: NavController;
  perfilContratanteService: PerfilContratanteService;
  public perfil: PerfilContratante = {};

  constructor(

    public keyboard: Keyboard,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private activeRoute: ActivatedRoute,

  ) {

  }


  ngOnInit() {
  }




  async register() {
    await this.presentLoading();

    try {
      await this.authService.register(this.userRegister);

    } catch (error) {

      let message: string;
      switch (error.code) {
        case 'auth/email-already-in-use':
          message = 'E-mail já cadastrado!';
          break;

        case 'auth/invalid-email':
          message = 'E-mail inválido!';
          break;

        case "auth/argument-error":
          message = "Insira seus dados!";
          break;

        case error.code:
          message = error.code;
          break;

      }
      this.presentToast(message);
      console.log(message);

    } finally {
      this.loading.dismiss();
    }

  }


  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
    return this.loading.present();

  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }


}