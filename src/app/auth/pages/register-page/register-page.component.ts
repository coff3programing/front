// register-page.component.ts
import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {
  user: any = {};
  form: FormGroup;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      lastname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rol:['',[Validators.required]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;

      const user = {
        name: formData.name,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password,
        rol: formData.rol
      };

      this.userService.createUser(user).subscribe(
        response => {
          console.log('User registered successfully', response);
          this.router.navigate(['auth/login']);
        },
        error => {
          console.error('Error registering user', error);
        }
      );
    } else {
      alert('Invalid form. Please complete the fields correctly.');
    }
  }

  get Name() {
    return this.form.controls['name'];
  }

  get LastName() {
    return this.form.controls['lastname'];
  }

  get Email() {
    return this.form.controls['email'];
  }

  get Password() {
    return this.form.controls['password'];
  }
}
