import { Injectable } from '@angular/core';
import { User } from './user'


@Injectable()
export class UserService {
  user: User;
  constructor() { }

  isLoggedIn(): boolean {
    return true;
  }

}
