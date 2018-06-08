import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ContatoComponent } from './contato/contato.component';
import { NossaVisaoComponent } from './nossa-visao/nossa-visao.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    QuemSomosComponent,
    ContatoComponent,
    NossaVisaoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
