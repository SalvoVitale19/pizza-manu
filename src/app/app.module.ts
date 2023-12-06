import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './features/home/home.component';
import { MenuComponent } from './features/menu/menu.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { PizzaMenuComponent } from './shared/pizza-menu/pizza-menu.component';
import { PizzaHomeComponent } from './shared/pizza-home/pizza-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MenuComponent,
    NotfoundComponent,
    PizzaMenuComponent,
    PizzaHomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
