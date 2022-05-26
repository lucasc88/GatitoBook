import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewUser } from './new-user';
import { NewUserService } from './new-user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  //newUserForm will represent the form state
  //! is to define the newUserForm can be null or not. This project is set to "strict": true in tsconfig.json
  newUserForm!: FormGroup;

  //FormBuilder is a service to create reactive forms
  constructor(private formBuilder: FormBuilder, private newUserService: NewUserService) { }

  //ngOnInit() runs when all the service is already injected
  ngOnInit(): void {
    //newUserForm initialization 
    this.newUserForm = this.formBuilder.group({
      email: [''],
      fullName: [''],
      userName: [''],
      password: ['']
    })
  }

  register(){
    //getRawValue() returns the object of the form fields.
    //Cast to interface NewUser is available because it has the same fields names
    const newUser = this.newUserForm.getRawValue() as NewUser;
    console.log(newUser);
  }
}
