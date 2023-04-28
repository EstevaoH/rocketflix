import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardFilmeComponent } from './components/card-filme/card-filme.component';
import { HeaderComponent } from './components/header/header.component';
import { NgIconsModule } from '@ng-icons/core';
import * as icons from '@ng-icons/feather-icons'
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoadingComponent } from './components/loading/loading.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardFilmeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgIconsModule.withIcons(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
