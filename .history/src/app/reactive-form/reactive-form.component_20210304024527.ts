import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl, NgForm } from '@angular/forms';



@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  name = new FormControl('');

  courses  =  ['Mtech', 'MCA', 'MBA', 'Mphil'];
  RegisterForm: FormGroup;
  CustomerForm: FormGroup;
 // firstName = FormControl('');


  constructor(private fb: FormBuilder) {
    this.createForm();

   }

   completeLogin(login: NgForm) {
   login.reset();

   }
   createForm1() {
    if (!this.RegisterForm.value.phone) {
      this.RegisterForm.controls['phone'].markAsTouched();
    }
    if (!this.RegisterForm.value.name) {
      this.RegisterForm.controls['name'].markAsTouched();
    }
    if (!this.RegisterForm.value.email) {
      this.RegisterForm.controls['email'].markAsTouched();
    }
  }
  onSubmit() {
    if (!this.CustomerForm.value.phone) {
      this.CustomerForm.controls['phone'].markAsTouched();
    }
    if (!this.CustomerForm.value.name) {
      this.CustomerForm.controls['name'].markAsTouched();
    }
    if (!this.CustomerForm.value.email) {
      this.CustomerForm.controls['email'].markAsTouched();
    }
  }
  createForm() {
    this.RegisterForm = this.fb.group({
      name: [null, Validators.required ],
      email: ['', [Validators.required]],
      phone: [null, Validators.required ],
      selectcourse: ['', Validators.required ],
      address: ['', Validators.required],
      });
      console.log(this.RegisterForm.value);
    }


    ngOnInit() {
    }

    }

