import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { $ } from 'protractor';
import { User } from '../models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.newUser = new User()
    this.getAllUsers();
  }

  login() {
    this.closeMessages();
    this.userService.login(this.username, this.password).subscribe((user: User) => {
      if (user != null) {
        if (this.checkCredentials(user.password, user.username)) {
          localStorage.setItem('user', JSON.stringify(user))
          this.loggedInUser = user;
          document.getElementById('loginModal').click()
          this.navigate(user);
        }
      } else {
        this.invalid = true;
      }
    }

    )
  }

  navigate(user: User) {
    if (user.type == 0) this.router.navigate(['organizer']);
    else if(user.type  == 1) this.router.navigate(['delegate']);
    else if(user.type  == 2) this.router.navigate(['leader']);

  }



  register() {
    this.closeMessages();
    if (this.newUser.password != this.confirmPassword) {
      this.notMatching = true;
    }
    if (!this.checkUsernames()) this.taken = true;
    else if (!this.checkNationalityLeaders()) this.leader = true;
    else {
      this.newUser.type = parseInt(this.type)
      this.newUser.approved = false;

      this.userService.register(this.newUser).subscribe((res: JSON) => {
        if (res['mess'] == 'ok') console.log('ok')
      })
    }
  }

  changePass() {
    this.closeMessages();
    var strongRegex = new RegExp("^(?=.{3,}}[a-z])(?=.{1,}[A-Z])(?=.{2,}[0-9])(?=.{2,}[!@#\$%\^&\*])(?=.{8,12})");
    if (strongRegex.test(this.newPassword)) alert("Bad")
    else if (this.newPassword != this.confirmPassword) {
      this.notMatching = true;
    } else if (this.oldPassword == this.newPassword) {
      this.samePassword = true;
    } else
      this.userService.changePass(this.changeUsername, this.oldPassword, this.newPassword).subscribe((res: JSON) => {
        if (res['mess'] == 'ok') {
          console.log('ok')
        } else if (res['mess'] == 'bad') {
          this.invalidCh = true;
        }
      })
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.allUsers = users;
    })
  }

  close() {
    this.username = '';
    this.password = '';
    this.invalid = false;

    this.changeUsername = '';
    this.oldPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';

    this.closeMessages();
  }

  closeMessages() {
    this.notMatching = false;
    this.samePassword = false;
    this.invalidCh = false;
    this.invalid = false;
    this.taken = false;
    this.leader = false;
  }

  checkCredentials(password: string, username: string) {
    if (this.username != username) {
      this.invalid = true;
    }
    if (this.password != password) {
      this.invalid = true;
    }
    return !this.invalid;
  }

  checkUsernames() {
    for (let i = 0; i < this.allUsers.length; i++) {
      if (this.allUsers[i].username == this.newUser.username) {
        return false
      }
    }
    return true;
  }

  checkNationalityLeaders() {
    for (let i = 0; i < this.allUsers.length; i++) {
      if (this.allUsers[i].country == this.newUser.country
        && this.allUsers[i].type == 2
        && this.allUsers[i].type == this.newUser.type) {
        return false
      }
    }
    return true;
  }


  loggedInUser: User;

  newUser: User;
  type: string;

  username: string;
  password: string;

  changeUsername: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;


  notMatching: boolean;
  samePassword: boolean;
  invalidCh: boolean;
  invalid: boolean;
  taken: boolean;
  leader: boolean;

  allUsers: User[] = []
}




