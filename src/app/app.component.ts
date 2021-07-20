import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  registrationForm = new FormGroup({
    userName: new FormControl('Rado'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
        city: new FormControl(''),
        state: new FormControl(''),
        postalCode: new FormControl(''),
    })

  });

  loadApiData() {

    // set all values - mandatory to pass all values
    this.registrationForm.setValue({
      userName: 'Tomas with setValue',
      password: '1cibula123',
      confirmPassword: '1cibula123',
      address: {
        city: 'City',
        state: 'State',
        postalCode: '12345'
      }
    });

    // set specific values - not all fields have to be passed
    this.registrationForm.patchValue({
      userName: 'Tomas with patchValue',
      password: '1cibula123',
      confirmPassword: '1cibula123',
    });

  }

}
