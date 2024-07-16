import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(){
    return [
      {id:1, name: 'Jane Cooper', school: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Active'},
      {id:2, name: 'Floyd Miles', school: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: 'Inactive'},
      {id:3, name: 'Ronald Richards', school: 'Adobe', phone: '(302) 555-0107', email: 'ronald@adobe.com', country: 'Israel', status: 'Inactive'},
      {id:4, name: 'Marvin McKinney', school: 'Tesla', phone: '(252) 555-0126', email: 'marvin@tesla.com', country: 'Iran', status: 'Active'},
      {id:5, name: 'Jerome Bell', school: 'Google', phone: '(629) 555-0129', email: 'jerome@google.com', country: 'Réunion', status: 'Active'},
      {id:6, name: 'Kathryn Murphy', school: 'Microsoft', phone: '(406) 555-0120', email: 'kathryn@microsoft.com', country: 'Curaçao', status: 'Active'},
      {id:7, name: 'Jacob Jones', school: 'Yahoo', phone: '(208) 555-0112', email: 'jacob@yahoo.com', country: 'Brazil', status: 'Active'},
      {id:8, name: 'Kristin Watson', school: 'Facebook', phone: '(704) 555-0127', email: 'kristin@facebook.com', country: 'Åland Islands', status: 'Inactive'}
    ];
  }
}
