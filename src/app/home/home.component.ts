import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormPoster } from '../services/form-poster.service';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  model = new Contact('', '', '', '','default'); // new Lead('x','y','x.y@test.com','1321432');
  isVisible: string = 'true';
   hasSubjectError = false;

   validateSubject(value){
     if (value === "default")
     this.hasSubjectError = true;
     else
     this.hasSubjectError = false;
   }

 constructor(private _route: ActivatedRoute,
              private formPoster: FormPoster) {

 }

 submitForm(form: NgForm){
   console.log(this.model);
   this.validateSubject(this.model.subject);
   if(this.hasSubjectError)
   return;

   //this.formPoster.postContactForm(this.model);
   //.subscribe(
   //  data=>console.log('success:',data),
   //  err =>console.log('error',err)
   //)

 }

 submitted = false;

 onContactMe() { this.submitted = true; }

 // TODO: Remove this when we're done
 get diagnostic() { return JSON.stringify(this.model); }

 
 
 nameToUppercase(value: string, field: string) {
   if (value.length > 0) {
     if (field == "firstName") {
       this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
     }
     else if (field == "lastName") {
       this.model.lastName = value.charAt(0).toUpperCase() + value.slice(1);
     }
   }
   else {
     if (field == "firstName") {
       this.model.firstName = value;
     } else if (field == "lastName") {
       this.model.lastName = value;
     }
   }
 }
}

export class Contact {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public mobile: string,
    public subject: string
  ) {

  }
}
