import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {TestComponent} from "./components/test-component/test-component.component";
import {UserPanelComponent} from "./components/user-panel/user-panel.component";
import {routing} from "./app.routing";
import {LoginPanelComponent} from "./components/login-panel/login-panel.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SondazeComponent } from './components/sondaze/sondaze.component';
import { AkceptacjaPowierzenComponent } from './components/akceptacja-powierzen/akceptacja-powierzen.component';
import {AngularFireModule} from "angularfire2";
import { PowierzeniaWSemestrzeListComponent } from './components/powierzenia-w-semestrze-list/powierzenia-w-semestrze-list.component';
import { PowierzeniaWSemestrzeKursyListComponent } from './components/powierzenia-w-semestrze-kursy-list/powierzenia-w-semestrze-kursy-list.component';
import { PowierzeniaWSemestrzeKursComponent } from './components/powierzenia-w-semestrze-kurs/powierzenia-w-semestrze-kurs.component';
import { PowierzenieDodajComponent } from './components/powierzenie-dodaj/powierzenie-dodaj.component';
import { PowierzenieEdytujComponent } from './components/powierzenie-edytuj/powierzenie-edytuj.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDIhGOjVYR27xQaW_BKlBhFj9mcB_XIsGE",
  authDomain: "nowaedukacja-a445c.firebaseapp.com",
  databaseURL: "https://nowaedukacja-a445c.firebaseio.com",
  storageBucket: "nowaedukacja-a445c.appspot.com",
  messagingSenderId: "172140473295"
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserPanelComponent,
    LoginPanelComponent,
    TestComponent,
    DashboardComponent,
    SondazeComponent,
    AkceptacjaPowierzenComponent,
    PowierzeniaWSemestrzeListComponent,
    PowierzeniaWSemestrzeKursyListComponent,
    PowierzeniaWSemestrzeKursComponent,
    PowierzenieDodajComponent,
    PowierzenieEdytujComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
