import { Component, OnInit } from '@angular/core';
import {IUser} from "../../interfaces";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails: IUser

  constructor(private UserService: UserService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.UserService.getOne(id).subscribe(value => this.userDetails = value)
    })

  }

}
