import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http"

import {AppRoutingModule} from "./app-routing.module";

import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./service/in-memory-data.service";

import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from "./service/hero.service";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroSearchComponent} from "./hero-search/hero-search.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],

  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers:[HeroService],
  bootstrap:[AppComponent]
})
export class AppModule { }
