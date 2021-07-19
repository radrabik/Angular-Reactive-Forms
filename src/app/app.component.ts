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

}
