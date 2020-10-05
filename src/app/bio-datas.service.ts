import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { Ibiodatas} from './bioDatas';
import { throwError as _throw } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BioDatasService {


  constructor( private http: HttpClient) { }

  howServiceWorks() {

    return 'This is how service works...!';
  }
  bioData() {
    return [
      { 'name': 'Aalok', 'profile': 'WebDeveloper', 'salary': '$300' },
      { 'name': 'Mayur', 'profile': 'WebDeveloper', 'salary': '$400' },
      { 'name': 'Prashant', 'profile': 'WebDeveloper', 'salary': '$500' }

    ];
  }

  getbioData(): Observable<Ibiodatas[]> {
    return this.http.get<Ibiodatas[]>('https://jsonplaceholder.typicode.com/postss');
  }
  errorahandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }

}
