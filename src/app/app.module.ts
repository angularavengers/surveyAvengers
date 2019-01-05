
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RagisterComponent } from './ragister/ragister.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { CreatequestionComponent } from './admin/createquestion/createquestion.component';
import { UserprofileComponent } from './admin/userprofile/userprofile.component';
import { ChartsComponent } from './admin/charts/charts.component';
import { PaymentComponent } from './admin/payment/payment.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    RagisterComponent,
    UserComponent,
    AdminComponent,
    CreatequestionComponent,
    UserprofileComponent,
    ChartsComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
