import { ChartsComponent } from './admin/charts/charts.component';
import { CreatequestionComponent } from './admin/createquestion/createquestion.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { flush } from '@angular/core/testing';
import { RagisterComponent } from './ragister/ragister.component';
import { UserComponent } from './user/user.component';
import { UserprofileComponent } from './admin/userprofile/userprofile.component';
import { PaymentComponent } from './admin/payment/payment.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'contact', component: ContactusComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RagisterComponent},
  { path: 'user', component: UserComponent}     ,
  { path: 'admin', component: AdminComponent,
  children: [
    { path: 'createquestion', component:  CreatequestionComponent},
    { path: 'userProfile', component: UserprofileComponent},
    { path: 'charts', component: ChartsComponent},
    { path: 'payment', component: PaymentComponent},
    { path: '', component: CreatequestionComponent}
  
  ]

},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]

})
export class AppRoutingModule { }
