import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmproService } from '../cmpro.service';
import { Contact } from '../Contact';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {

  newContact =  new Contact();

  constructor( private cmproService : CmproService, private router : Router) {}

 addContact(){
  this.cmproService.create(this.newContact).subscribe(cont =>{
    console.log(cont);
    this.router.navigate(['contacts']);
  });

 }
}

