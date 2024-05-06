import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Users } from 'src/Classes/Users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public httpclient: HttpClient) { }

  baseUrl: string = 'http://localhost:8520/Users/'

  currentUser: Users = new Users("","","","","")

  getAll(): Observable<Array<Users>> {
    return this.httpclient.get<Array<Users>>(`${this.baseUrl}getAll`)
  }

  getByUserNameAndPassword(email:string, pass:string): Observable<Users> {
    // debugger
    return this.httpclient.get<Users>(`${this.baseUrl}getByUserNameAndPassword/${email}/${pass}`)
  }

  addUser(usr: Users): Observable<Users> {
    // debugger
    return this.httpclient.post<Users>(`${this.baseUrl}addUser`, usr)
  }
}
