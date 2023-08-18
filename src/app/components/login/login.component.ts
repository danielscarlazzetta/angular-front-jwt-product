import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user.interfaces';
import { ErrorServicesService } from 'src/app/services/error.services.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css'],
  styleUrls: ['../../../styles.css'],
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  loading: boolean = false;

  constructor( private toastr: ToastrService,
               private _userServices : UserService,
               private router : Router,
               private _errorService : ErrorServicesService){
  }

  login(){
    if(this.username == '' || this.password == ''){
      this.toastr.error(`Todos los campos son obligatorios`, 'Error');
      return;
    }
    const user : User = {
      username: this.username,
      password: this.password,
    }

    this.loading = true;

    this._userServices.login(user).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/dashboard']);
        this.toastr.success(`Bienvenido ${this.username}`, 'Bienvenido!');
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false;
      }
    });
  }

  
}
