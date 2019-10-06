import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import * as firebase from 'firebase';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private authService: AuthService) { }



  async logout() {
    try {
      await this.authService.logout()
    } catch (error) {
      console.log(error);
    }
  }




}
