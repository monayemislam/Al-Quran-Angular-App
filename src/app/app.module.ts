import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './common/template-parts/left-sidebar/left-sidebar.component';
import { TopbarComponent } from './common/template-parts/topbar/topbar.component';
import { OverviewCardsComponent } from './common/template-parts/overview-cards/overview-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    TopbarComponent,
    OverviewCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
