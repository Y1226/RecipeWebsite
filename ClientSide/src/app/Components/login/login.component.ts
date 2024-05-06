import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/Classes/Users';
import { UserServiceService } from 'src/Services/Users/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public userService: UserServiceService, public router: Router) { }

  myForm: FormGroup = new FormGroup({
    "fname": new FormControl(""),
    "lname": new FormControl(""),
    "password": new FormControl(""),
    "email": new FormControl(""),
    "_id":new FormControl("")
  })

  getFName() {
    return this.myForm.controls['fname'].value
  }
  getLName() {
    return this.myForm.controls['lname'].value
  }
  getPassword() {
    return this.myForm.controls['password'].value
  }
  getEmail() {
    return this.myForm.controls['email'].value
  }

  openMenu = (evt: any, menuName: any) => {
    debugger
    let i, x, tablinks;
    x = document.querySelectorAll<HTMLElement>('.menu');
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
    }
    document.getElementById(menuName)!.style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-dark-grey";
  }

  addUserAndSignIn = () => {
    let user:Users=this.myForm.value
    debugger
    this.userService.addUser(user).subscribe(x => {
      debugger
      this.userService.currentUser = x;
      document.getElementById('addRecipe')!.style.display = "block"
      document.getElementById('logout')!.innerText = 'LOGOUT'
      this.router.navigate(['../showRecipe'])
    })
  }

  login = () => {
    debugger
    // document.getElementById('addRcp')!.style.display = "block"
    // document.getElementById('addRcp')!.removeAttribute('display')
    this.userService.getByUserNameAndPassword(this.getEmail(), this.getPassword()).subscribe(x => {debugger;
      this.userService.currentUser = x;
      if (this.userService.currentUser == null) {
        let i, x, tablinks;
        x = document.querySelectorAll<HTMLElement>('.menu');
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < x.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
        }
        document.getElementById("Drinks")!.style.display = "block";
      }
      else {
        document.getElementById('logout')!.innerText = 'LOGOUT'
        document.getElementById('addRecipe')!.style.display="block"
        console.log(x);
        this.userService.currentUser=x
        this.router.navigate(['../showRecipe'])
      }
    })
  }

}
