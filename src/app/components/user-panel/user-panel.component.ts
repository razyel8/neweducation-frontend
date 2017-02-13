import {Component, OnInit, AfterViewInit, EventEmitter} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../model/User";
import {Input, Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css'],
  providers: [UserService]
})
export class UserPanelComponent implements OnInit, AfterViewInit {

  @Input()
  user: User;

  @Output() userUpdated = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
    //this.user = this.userService.activeUser;
  }

  ngAfterViewInit(){
    (<any>$('.ui.dropdown'))
        .dropdown({
          on: 'hover'
        })
    ;
  }

  logout(){
    this.userService.logout();
    this.userUpdated.emit();
  }

}
