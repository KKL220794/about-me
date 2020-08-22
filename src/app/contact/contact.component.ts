import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService, Contact } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isLoading = false;
  message: string;
  messageColor: string;
  contactForm: FormGroup;

  constructor(private _fb: FormBuilder, private _conService: ContactService) { }

  ngOnInit() {
    this.message = '';

    this.contactForm =  this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }


  onFormSubmit(): void {
    if (this.contactForm.valid) {
      this.isLoading = true;
      const contact: Contact = this.contactForm.value;
      this._conService.submitMessage(contact).subscribe(res => {
        this.isLoading = false;
        this.message = "Hoorah!! Successfully submitted ";
        this.messageColor = '#43a047';
        setTimeout(() => {
          this.messageColor = null;
          this.message = ''
        }, 3000);
        this.contactForm.reset();
      }, (error) => {
        setTimeout(() => {
          this.messageColor = null;
          this.message = ''
        }, 3000);
        this.message = "Oops, Looks like there is some issue";
        this.messageColor = "#c62828";
        this.isLoading = false;
        
      })
    }
    
  }

}
