import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CmproService } from '../cmpro.service';
import { Contact } from '../Contact';
import { Page } from '../page';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
modifierContact(_t40: Contact) {
throw new Error('Method not implemented.');
}
  contacts: Contact[] = [];
  currentPage: number = 0;
  pageSize: number = 10;
  pageNumber!: number;
  totalPages: any;
  id! : number;

  constructor(private cmproService: CmproService, private router : Router) { }

  ngOnInit(): void {
    this.chargerContacts();
  }

    chargerContacts(){
      this.cmproService.list()
      .subscribe(contacts => {console.log(contacts);
      this.contacts = contacts;
    });
    }

    supprimerContact(c: Contact){
      let conf = confirm('Etes-vous sûr de supprimer?');
      if(conf)
      this.cmproService.delete(c.id).subscribe(() =>{ 
      console.log("produit supprimé");
      this.chargerContacts();
      //this.router.navigate(['contacts']);
       }) };
    }


    /*this.getPage();
  }*/

  /*getContact(): void {
    this.cmproService.list()
    .subscribe(contact => this.contacts =  contact );
    console.log(this.contacts);
    this.contacts = this.contacts;
  };*/



 /* getPage(): void {
    this.cmproService.getPage(this.pageNumber, this.pageSize)
      .subscribe((page: Page<Contact>) => {
        this.contacts = page.content;
        this.totalPages = page.totalPages;
      });
  }

  nextPage(): void {
    if (this.pageNumber < this.totalPages - 1) {
      this.pageNumber++;
      this.getPage();
    }
  }
  getProducts() {
    throw new Error('Method not implemented.');
  }

  previousPage(): void {
    if (this.pageNumber > 0) {
      this.pageNumber--;
      this.getPage();
    }
  }*/


