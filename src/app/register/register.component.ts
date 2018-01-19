import { Component, OnInit } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User();
  users = [];
  onSubmit(){
    this.users.push(this.user);
    this.user = new User();
  }

  ngOnInit() {
  }

}
