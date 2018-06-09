import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { NossaVisaoComponent } from './nossa-visao/nossa-visao.component';
import { ContatoModule } from './contato/contato.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    RouterModule.forRoot([]),
    ContatoModule
  ],
  declarations: [
    AppComponent,
    QuemSomosComponent,
    NossaVisaoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
