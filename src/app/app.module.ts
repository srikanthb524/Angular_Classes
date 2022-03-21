import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { PropbingComponent } from './propbing/propbing.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { StrucDirectivesComponent } from './struc-directives/struc-directives.component';
import { SwitchcompComponent } from './switchcomp/switchcomp.component';
import { ForcompComponent } from './forcomp/forcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    PropbingComponent,
    EventbindComponent,
    StrucDirectivesComponent,
    SwitchcompComponent,
    ForcompComponent
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
