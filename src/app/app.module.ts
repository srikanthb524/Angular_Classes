import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { PropbingComponent } from './propbing/propbing.component';
import { EventbindComponent } from './eventbind/eventbind.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    PropbingComponent,
    EventbindComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
