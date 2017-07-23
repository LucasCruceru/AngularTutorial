import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { HeroesComponent }        from './heroes.component';
import { AppComponent} from "./app.component"
import { HeroDetailComponent } from './hero-detail.component';
import {HeroService} from "./hero.service";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path:'heroes', component: HeroesComponent
    }])

  ],
  declarations: [
    HeroesComponent,
    AppComponent,
    HeroDetailComponent
  ],
  providers:[HeroService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


