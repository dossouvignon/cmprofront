import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { DasbordComponent } from './dasbord/dasbord.component';
import { EmailComponent } from './email/email.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProjectComponent } from './project/project.component';
import { TacheComponent } from './tache/tache.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SettingComponent } from './setting/setting.component';
import { AppRoutingModule } from './app-routing.module';
import { ReportingComponent } from './reporting/reporting.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateContactComponent } from './update-contact/update-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormulaireComponent,
    ContactComponent,
    MainComponent,
    DasbordComponent,
    EmailComponent,
    LoginComponent,
    RegisterComponent,
    ProjectComponent,
    TacheComponent,
    CalendarComponent,
    SettingComponent,
    ReportingComponent,
    UpdateContactComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
