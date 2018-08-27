import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceInterface, LibraryComponent, Library1Service } from 'library1';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: ServiceInterface, useClass: Library1Service }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
