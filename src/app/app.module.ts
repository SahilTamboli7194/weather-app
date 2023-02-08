import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './Components/bar/bar.component';
import { LineComponent } from './Components/line/line.component';
import { MultiLineComponent } from './Components/multi-line/multi-line.component';
import { WetherAppComponent } from './Components/wether-app/wether-app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    LineComponent,
    MultiLineComponent,
    WetherAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
