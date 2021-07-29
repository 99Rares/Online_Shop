import { Injectable } from '@angular/core';
import { BackendService } from '../../backend/backend.service';
import { Observable } from 'rxjs';
import { ShortUser, UserData } from './model/users.data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  api = 'http://localhost:3000';
  loginEndpoint = 'login';

  constructor(private service: BackendService) {}

  login(user: ShortUser): Observable<UserData> {
    return this.service.post(`${this.api}/${this.loginEndpoint}`, user); //obiect care cheie cu val username si cheie cu val password
  }
}
