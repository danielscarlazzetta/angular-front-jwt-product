import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user.interfaces';
import { ErrorServicesService } from 'src/app/services/error.services.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../../../styles.css'],
})
export class SignInComponent {

  name: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  typeofuser: string = '';
  loading: boolean = false;

  constructor(  private toastr: ToastrService,
                private _userService: UserService,
                private router: Router,
                private _errorService : ErrorServicesService) {
  }

  ngOnInit() {
  }

  addUser() {
    const fields = [this.username, this.password, this.confirmPassword, this.email, this.typeofuser];

    for (const field of fields) {
      if (field === '') {
        this.toastr.error('Los campos Username, Password, email y tipo de usuario son obligatorios', 'Error');
        return;
      }
    }

    if (this.password != this.confirmPassword) {
      this.toastr.error('Password no coinciden', 'Error');
      return;
    }

    const fieldsUser: User = {
      name: this.name,
      username: this.username,
      password: this.password,
      email: this.email,
      phone: this.phone,
      address: this.address,
      typeofuser: this.typeofuser,
    }

    this.loading = true;

    this._userService.signIn(fieldsUser).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`El usuario ${this.username} se registro con exito!`, 'Registro');
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      },
      complete: () => console.info('complete')
    });

  }


}
