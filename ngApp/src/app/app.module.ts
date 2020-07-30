import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokeInterceptorService } from './toke-interceptor.service';
import { NewProductComponent } from './new-product/new-product.component';
import { HeaderComponent } from './header/header.component';
import { UpdateComponent } from './update/update.component';
import { AthologinComponent } from './athologin/athologin.component';
import { AthoregsiterComponent } from './athoregsiter/athoregsiter.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { TenderComponent } from './tender/tender.component';
import { NewTenderComponent } from './new-tender/new-tender.component';
import { HomeTenderComponent } from './home-tender/home-tender.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SubmitTenderComponent } from './submit-tender/submit-tender.component';
import { NoticeComponent } from './notice/notice.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    EventsComponent,
    NewProductComponent,
    HeaderComponent,
    UpdateComponent,
    AthologinComponent,
    AthoregsiterComponent,
    SpecialEventsComponent,
    TenderComponent,
    NewTenderComponent,
    HomeTenderComponent,
    WelcomeComponent,
    SubmitTenderComponent,
    NoticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, {
    provide : HTTP_INTERCEPTORS,
    useClass : TokeInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
