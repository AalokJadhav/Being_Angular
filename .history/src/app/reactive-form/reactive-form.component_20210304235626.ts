import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  name = new FormControl('');
  customerForm: FormGroup;
  submitted = false;
  defaultValue;

  constructor(private fb: FormBuilder) {

  }



  ngOnInit() {

  }

  onSubmit() {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.fb.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zipcode: ['', [Validators.required]]
      })

    });

    this.submitted = true;

    // stop here if form is invalid
    if (this.customerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)');

  }

  // convenience getter for easy access to form fields
  get f() { return this.customerForm; }
}
