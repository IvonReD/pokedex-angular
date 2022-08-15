import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CataloguePageComponent } from './pages/catalogue-page/catalogue-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { PokemonService } from './shared/services/pokemon.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    CataloguePageComponent,
    NavbarComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
