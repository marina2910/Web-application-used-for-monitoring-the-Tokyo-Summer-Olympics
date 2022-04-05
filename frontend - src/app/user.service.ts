import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  login(username: string, password: string) {
    const data = {
      username: username,
      password: password
    };
    return this.http.post(`${this.uri}/users/login`, data);
  }

  changePass(username: string, oldPassword: string, newPassword: string) {
    const data = {
      username: username,
      oldPassword: oldPassword,
      newPassword: newPassword
    };
    return this.http.post(`${this.uri}/users/password`, data);
  }

  register(user: User) {
    const data = {
      username: user.username,
      password: user.password,
      name: user.name,
      surname: user.surname,      
      email: user.email,
      country: user.country,
      type: user.type,
      approved: user.approved
    }
    return this.http.post(`${this.uri}/users/register`, data)
  }

  getAllUsers() {
    return this.http.get(`${this.uri}/users/getAll`)
  }

  approve(user: User) {
    const data = {
      username: user.username,
    }
    return this.http.post(`${this.uri}/users/approve`, data);
  }

  decline(user: User) {
    const data = {
      username: user.username
    }
    return this.http.post(`${this.uri}/users/decline`, data)
  }
}
