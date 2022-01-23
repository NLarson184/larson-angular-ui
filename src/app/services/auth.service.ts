import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

const AUTH_API = environment.AUTH_URL;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(AUTH_API + 'signin', {
      email,
      password
    }, httpOptions)
  }
}
