import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VelhaModule } from './velha/velha.module';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VelhaModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
