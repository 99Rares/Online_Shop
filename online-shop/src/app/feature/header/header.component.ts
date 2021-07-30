import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  getName() {
    let obj = localStorage.getItem('user');
    if (obj) {
      let user = JSON.parse(obj);
      return user.fullName;
    }
  }
}
