import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BitcoinService } from './bitcoin.service';
import { TemporizadorService } from './temporizador.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, NavbarComponent],
  bootstrap: [AppComponent],
  providers: [BitcoinService, TemporizadorService],
})
export class AppModule {}
