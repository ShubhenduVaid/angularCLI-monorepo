import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LibraryComponent, ServiceInterface, Library2Service } from 'library1';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: ServiceInterface, useClass: Library2Service }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
