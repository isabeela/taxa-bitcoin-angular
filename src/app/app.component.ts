import { Component, VERSION } from '@angular/core';

import { BitcoinService } from './bitcoin.service';
import { TemporizadorService } from './temporizador.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Taxa de Bitcoin';

  constructor(
    public bitcoinService: BitcoinService,
    public timer: TemporizadorService
  ) {
    this.timer.start();
  }

  ngOnInit() {}

  updateBitCoinRates() {
    this.bitcoinService.update();
  }
}
