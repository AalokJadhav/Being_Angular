import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-form',
  templateUrl: './tdf-form.component.html',
  styleUrls: ['./tdf-form.component.css']
})
export class TdfFormComponent implements OnInit {


  model: any = {};
  Result: any = {};

  onSubmit() {
    this.Result = this.model;
  }
  ngOnInit() {
  }

}
