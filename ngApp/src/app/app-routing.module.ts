import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { NewProductComponent } from './new-product/new-product.component';
import {  AthologinComponent } from './athologin/athologin.component';
import { AthoregsiterComponent } from './athoregsiter/athoregsiter.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { TenderComponent } from './tender/tender.component';
import { NewTenderComponent } from './new-tender/new-tender.component';
import { HomeTenderComponent } from './home-tender/home-tender.component';
import { WelcomeComponent } from'./welcome/welcome.component';
import { SubmitTenderComponent } from './submit-tender/submit-tender.component';
import { NoticeComponent } from './notice/notice.component';



const routes: Routes = [
  {path :'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component : HomeComponent},
  {path:'events', component: EventsComponent, canActivate : [AuthGuard]},
  {path:'login', component: LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'add', component: NewProductComponent},
  {path: 'edit/:id', component: UpdateComponent },
  {path: 'login1', component: AthologinComponent },
  {path: 'register1', component: AthoregsiterComponent},
  {path: 'special', component: SpecialEventsComponent},
  {path: 'events1', component:SpecialEventsComponent},
  {path: 'tender',component:TenderComponent},
  {path: 'add1', component:NewTenderComponent},
  {path: 'tender3', component:HomeTenderComponent, canActivate : [AuthGuard]},
  {path: 'loginhome', component:WelcomeComponent },
  {path: 'booktender', component:SubmitTenderComponent},
  {path: 'done', component:NoticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
