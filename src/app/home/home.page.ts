import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ModalpopupPage } from '../modalpopup/modalpopup.page';

@Component({
  selector: '',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public type = '';

  constructor(private modalController: ModalController) {
    this.type = "play";
  }

  async OpenModal() {
    const modal = this.modalController.create({
      component: ModalpopupPage,
      cssClass: 'phone-modal'
    });

    return (await modal).present();
  }

  ngOnInit() {
  }

}