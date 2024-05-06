import { Component } from '@angular/core';
import { Users } from 'src/Classes/Users';
import { UserServiceService } from 'src/Services/Users/user-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
  constructor(public userService:UserServiceService){}
  date: Date = new Date()
}
