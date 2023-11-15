import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CmproService } from '../cmpro.service';
import { Contact } from '../Contact';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit{
  currentContact = new Contact();
  id! : number;
  contact! : Contact;
   index! : number;

  constructor(private activatedRoute: ActivatedRoute,
    private cmproService: CmproService,
     private router : Router) { }

  ngOnInit(): void {
  this.cmproService.getOne(this.activatedRoute.snapshot.params['id']).
  subscribe(cont  =>{this.currentContact = cont;});
  }

  /*modifierContact(){
    this.cmproService.update(this.currentContact).subscribe(cont =>{
      this.router.navigate(['contacts']); } );
  }*/

    modifierContact(contact: Contact): void {
      console.log(contact);
    this.cmproService.update(contact.id, contact)
      .subscribe(updatedContact => {
        this.router.navigate(['contact']);
       } );
       
  }
}




