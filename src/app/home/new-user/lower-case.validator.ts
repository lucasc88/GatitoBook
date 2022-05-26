import { AbstractControl } from "@angular/forms";

//custom validator to check if user name is totally lower case.
//control will be the checked element 
export function lowerCaseValidator(control: AbstractControl) {
    //cast to string
    const value = control.value as string;
    if (value !== value.toLowerCase()) {
        return { invalidLowerCase: true }; //it will return Object with name invalidLowerCase
    } else {
        return null;
    }
}