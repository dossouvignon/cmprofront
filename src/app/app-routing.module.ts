import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { DasbordComponent } from './dasbord/dasbord.component';
import { EmailComponent } from './email/email.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { RegisterComponent } from './register/register.component';
import { SettingComponent } from './setting/setting.component';
import { TacheComponent } from './tache/tache.component';
import { ReportingComponent } from './reporting/reporting.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';


const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dasbord', component: DasbordComponent },
  { path: 'email', component: EmailComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'login', component: LoginComponent },
 
  { path: 'project', component: ProjectComponent },
 
  { path: 'register', component: RegisterComponent },

  { path: 'setting', component: SettingComponent },

  { path: 'tache', component: TacheComponent },

  { path: 'reporting', component: ReportingComponent },

  { path: '', component: LoginComponent},

  { path: 'update-contact/:id', component:  UpdateContactComponent }
 
 
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],  
  exports: [RouterModule]
})
export class AppRoutingModule { }