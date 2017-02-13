import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ApplicationRef} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-login-panel',
    templateUrl: './login-panel.component.html',
    styleUrls: ['./login-panel.component.css'],
})
export class LoginPanelComponent implements OnInit {

    login: string;
    password: string;

    constructor(private userService: UserService, public appRef: ApplicationRef, private router: Router) {
    }

    ngOnInit() {
    }

    loginMe(){
        this.userService.login(this.login, this.password).then(v => {
            this.userService.setActiveUser(v);
            this.router.navigate(['/dashboard'])
            //this.appRef.tick();
        });
    }


}
