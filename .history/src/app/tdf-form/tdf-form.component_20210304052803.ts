import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-form',
  templateUrl: './tdf-form.component.html',
  styleUrls: ['./tdf-form.component.css']
})
export class TdfFormComponent implements OnInit {


  model: any = {};
  Result;

  onSubmit() {
    this.Result = ('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    alert(this.Result);
  }
  ngOnInit() {
  }

}
