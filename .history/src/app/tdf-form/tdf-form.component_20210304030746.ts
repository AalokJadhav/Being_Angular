import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-form',
  templateUrl: './tdf-form.component.html',
  styleUrls: ['./tdf-form.component.css']
})
export class TdfFormComponent implements OnInit {


  model: any = {};
  firstname;
  lastname;
  email;
  password;

  onSubmit(f) {
    f.reset();
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
  ngOnInit() {
  }

}
