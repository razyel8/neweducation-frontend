import {Component, OnInit, Inject, ApplicationRef} from '@angular/core';
import {User} from "../../model/User";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private user: User;

  constructor(private userService: UserService, public appRef: ApplicationRef, private router: Router) {
  }

  ngOnInit() {
    console.log("init Dashboard")
    if (this.userService.getUser() === null) {
        this.router.navigate(['/login']);
    } else {
      this.user = this.userService.getUser();
    }
    console.log(this.user);
  }

  handleLogout(user) {
    this.userService.activeUser == null;
    this.user = null;
    this.router.navigate(['/login']);
    console.log("User logout");
  }

}
