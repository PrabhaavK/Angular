import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      id: new FormControl("1", Validators.required),
      firstname: new FormControl("Prabhav", [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl("Khalya", [Validators.required, Validators.maxLength(12)]),
    });
  }

  get Firstname() {
    return this.userForm.get('firstname');
  }

  get Lastname() {
    return this.userForm.get('lastname');
  }

  get Id() {
    return this.userForm.get('id');
  }

  submit() {
    console.log(this.userForm.value);
  }
}

