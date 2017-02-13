import {Injectable, ApplicationRef} from '@angular/core';
import {User} from "../model/User";
import {Http, Headers, URLSearchParams} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Router} from "@angular/router";

@Injectable()
export class UserService {


  private loginUrl = 'http://localhost:8080/login';

  public activeUser: User = null;

  constructor(private http: Http, public appRef: ApplicationRef, private router: Router) {
    //For design only:
    // this.activeUser = new User();
    // this.activeUser.imie = "Damian";
    // this.activeUser.nazwisko = "Test"
    // this.activeUser.role = 3;
  }

  login(user: string, pass: string): Promise<User>{
    let headers = new Headers();
    //headers.append("Access-Control-Allow-Origin", "*")
    let data = new URLSearchParams();
    data.append('login', user);
    data.append('password', pass);

    return this.http.post(this.loginUrl, data, {headers: headers})
        .toPromise()
        .then(function(response){
          // //this.activeUser = response.json() as User;
          // console.log(response);
          // //this.activeUser =  response.json();
          // console.log((response.json() as User).authToken);
          return response.json() as User;
        })
        .catch(this.handleError)
  }

  setActiveUser(user: User){
    this.activeUser = user;
  }

  logout(){
    this.activeUser = null;
    this.router.navigate([''])
    console.log("Logout")
  }

  getUser(): User{
    return this.activeUser;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
