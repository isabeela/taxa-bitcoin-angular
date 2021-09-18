import { Injectable } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Injectable()
export class TemporizadorService {
  constructor(public BitcoinService: BitcoinService) {}

  private timer: any;
  private counter = 0;

  /*inicia a contagem em ms a cada n ms o contador é zerado */
  start() {
    this.BitcoinService.update();
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.counter++;
        if (this.counter == 45) {
          this.BitcoinService.update();
          this.counter = 0;
        }
      }, 1000);
    }
  }

  getCount() {
    return this.counter;
  }
}
