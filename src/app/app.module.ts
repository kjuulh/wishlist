import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WishComponent } from './components/wish/wish.component';

import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from './modules/material-module';

@NgModule({
  declarations: [AppComponent, WishComponent],
  imports: [
    MaterialModule,
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
