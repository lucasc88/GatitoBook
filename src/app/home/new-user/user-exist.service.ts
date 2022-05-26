import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { switchMap, map, first } from 'rxjs';
import { NewUserService } from './new-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserExistService {

  constructor(private newUserService: NewUserService) { }

  //Asynchronous request. Good practice always uses Observable for asynchronous request
  userAlreadyExist() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userName =>
          this.newUserService.checkExistingUser(userName)
        ),
          map((userExist) =>
            userExist ? { userExisting: true } : null
          )
        ), first()
      );
    };
  }
}
