import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './users/update/update.component';
import { NgxPaginationModule } from 'ngx-pagination'; // Módulo da dependência de paginação
import { Ng2SearchPipeModule } from 'ng2-search-filter'; // Importação
import { MensagemService } from './share/mensagem.service';
import { OrderModule } from 'ngx-order-pipe'; // <- import OrderModule

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule
  ],
  providers: [MensagemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
