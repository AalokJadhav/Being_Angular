import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-form',
  templateUrl: './tdf-form.component.html',
  styleUrls: ['./tdf-form.component.css']
})
export class TdfFormComponent implements OnInit {


  model: any = {};
  result = {};
  onSubmit() {
    this.result = JSON.stringify(this.model);
  }
  ngOnInit() {
  }

}
