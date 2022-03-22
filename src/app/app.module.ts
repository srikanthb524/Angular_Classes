import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { PropbingComponent } from './propbing/propbing.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { StrucDirectivesComponent } from './struc-directives/struc-directives.component';
import { SwitchcompComponent } from './switchcomp/switchcomp.component';
import { ForcompComponent } from './forcomp/forcomp.component';
import { AngpipeComponent } from './angpipe/angpipe.component';
import { TempConvPipePipe } from './temp-conv-pipe.pipe';
import { AngcustpipeComponent } from './angcustpipe/angcustpipe.component';
import { AngFormsComponent } from './ang-forms/ang-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    PropbingComponent,
    EventbindComponent,
    StrucDirectivesComponent,
    SwitchcompComponent,
    ForcompComponent,
    AngpipeComponent,
    TempConvPipePipe,
    AngcustpipeComponent,
    AngFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
