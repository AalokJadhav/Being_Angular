import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';



@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  courses  =  ['Mtech', 'MCA', 'MBA', 'Mphil'];
  RegisterForm: FormGroup;
 // firstName = FormControl('');


  constructor(private fb: FormBuilder) {
    this.createForm();

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

