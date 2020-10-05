import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: MyserviceService, private routes: Router) { }

  msg;

  ngOnInit() {
  }
  check(uname: string, p: string) {
    const output = this.service.checkusernameandpassword(uname, p);
    if (output === true) {
      this.routes.navigate(['/dashboard']);
    } else {
      this.msg = 'Invalid username and password';
    }
  }
}

