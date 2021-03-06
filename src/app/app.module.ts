import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {appRoutingModule} from './router/app.routing';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {ProfileComponent} from './profile';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {MatcherComponent} from './matcher/matcher.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatSelectModule} from '@angular/material';
import { DivcontrolComponent } from './divcontrol/divcontrol.component';

import {AuthGuard} from './auth.guard';
import {AuthService} from './services/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MatcherComponent





  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
