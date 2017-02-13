import {Component, OnInit, ApplicationRef} from '@angular/core';
import {UserService} from "./services/user.service";
import {User} from "./model/User";
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UserService]
})
export class AppComponent implements OnInit {

    private user: User;

    constructor(private userService: UserService, public appRef: ApplicationRef, private router: Router) {
    }

    ngOnInit() {
        this.user = this.userService.getUser();
        // if (this.userService.getUser() === null) {
        //     this.router.navigate(['/login']);
        // }
    }

    login: string;
    password: string;

    loginMe(){
        this.userService.login(this.login, this.password).then(v => {
            this.user = v;
            this.userService.setActiveUser(v);
            this.appRef.tick();
        });
        // this.user = this.userService.getUser();
        // this.appRef.tick();
    }

    handleUserUpdated(user) {
        this.user = null;
        this.appRef.tick();
        console.log("User updated");
    }
}
