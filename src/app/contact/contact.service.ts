import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contact {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

constructor(private _http: HttpClient) { }

submitMessage(contact: Contact): Observable<Contact> {
  return this._http.post<Contact>("https://kk94-portfolio.firebaseio.com/contactMe.json", contact)
}

}
