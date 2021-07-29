import { Component, OnInit } from '@angular/core';
import { ShortUser } from '../model/users.data';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private service: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  login(user: ShortUser) {
    this.service.login(user).subscribe(
      () => {
        this.router.navigate(['/products']);
        this._snackBar.open('Logged in successfully!');
      },
      () => console.log(this._snackBar.open('Login failed!'))
    );
  }
}
