import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  text: any = '';
  yourtext = '';

  firstname: any = 'Aalok';
  lastname: any =  'Jadhav';

  isActive = true;
  isdisable = true;

  ButtonClassChange = 'color bgcolor';

  inlineColor: true;
  inlineFont: true;

  biodata = {
    firstName: 'Alok',
    lastName: 'Jadhav',
    DOB: '1/06/1990',
    Percentage: '50.00',
    Salary: '300'

  };

  Sentance = 'This Is For Custom Pipe example';

  fullName: any = 'Alok Jadhav';
  projectName: any = 'Being_Angular Project';

  carsname: any = [
    {id: 1, name: 'Audi' },
    {id: 2, name: 'BMW' },
    {id: 3, name: 'Range Rover' },
    { id: 4, name: 'Mercedes'},
    { id: 5, name: 'Ford'}
  ];

  favcolor: any = 'blue';

  public friends = 'Ross-------data is coming from parent';

  public childMessage;


  getfullname() {
    return this.firstname + '  ' + this.lastname;
  }

  onclick(event) {
    this.text = 'event binding works';
    console.log('event binding works on console');
    console.log(event);

  }

  getdata(data) {
    console.log(data);
  }
}
