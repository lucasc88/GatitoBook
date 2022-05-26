import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lowerCaseValidator } from './lower-case.validator';
import { NewUser } from './new-user';
import { NewUserService } from './new-user.service';
import { UserExistService } from './user-exist.service';

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
  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private userExistService: UserExistService,
    private router: Router
  ) { }

  //ngOnInit() runs when all the service is already injected
  ngOnInit(): void {
    //newUserForm initialization 
    this.newUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],//second array postion is for validations
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [Validators.required, lowerCaseValidator]],
      password: ['', [Validators.required]]
    })
  }

  register() {
    //getRawValue() returns the object of the form fields.
    //Cast to interface NewUser is available because it has the same fields names

    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser;
      this.newUserService.registerNewUser(newUser).subscribe(() => {
        this.router.navigate(['']);
      },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
