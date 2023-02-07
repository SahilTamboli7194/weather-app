import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './Components/bar/bar.component';
import { LineComponent } from './Components/line/line.component';
import { MultiLineComponent } from './Components/multi-line/multi-line.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    LineComponent,
    MultiLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
