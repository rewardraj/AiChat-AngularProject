import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeatureComponent } from './feature/feature.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeroComponent, FeatureComponent, CardComponent],
  imports: [BrowserModule, FontAwesomeModule],
  bootstrap:[AppComponent]
})

export class AppModule {}
