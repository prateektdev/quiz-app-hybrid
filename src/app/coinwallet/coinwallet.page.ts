import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coinwallet',
  templateUrl: './coinwallet.page.html',
  styleUrls: ['./coinwallet.page.scss'],
})
export class CoinwalletPage implements OnInit {

  public type = '';

  constructor() {
    this.type = "play";
  }

  ngOnInit() {
  }

}
