import { Routes, Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController, NavController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { User } from 'src/app/interfaces/user';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides, null) slides: IonSlides;

  public userLogin: User = {};

  private loading: any;



  constructor(
    public keyboard: Keyboard,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,

  ) { }

  ngOnInit() {

  }

  segmentChanged(event: any) {
    if (event.detail.value === "login") {
      this.slides.slidePrev();
    } else {
      this.slides.slideNext();
    }
  };


  async login() {
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin);
    } catch (error) {
      let message: string;
      switch (error.code) {
        case "auth/email-already-in-use":
          message = "E-mail já cadastrado!";
          break;

        case "auth/invalid-email":
          message = "E-mail inválido!";
          break;

        case "auth/user-not-found":
          message = "E-mail não encontrado!";
          break;

        case "auth/wrong-password":
          message = "E-mail ou Senha incorreta!";
          break;

        case "auth/argument-error":
          message = "Insira seus dados!";
          break;

        case error.code:
          message = error.code;
          break;
      }
      this.presentToast(message);
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

