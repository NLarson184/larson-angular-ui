import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  // Clear out any stored sign in tokens and user objects
  signOut(): void {
    window.sessionStorage.clear();
  }

  // Save/update a session token
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  // Get session token
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  // Save a user object
  public saveUser(user: User): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  // Get the user object
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return new User(JSON.parse(user));
    }
    return null;
  }
}
