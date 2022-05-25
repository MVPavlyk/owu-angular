import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../interfaces';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.css']
})
export class OneUserComponent implements OnInit {
  @Input()
  user: IUser;

    constructor(private router : Router, private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

  getDetails():void {
      this.router.navigate([this.user.id], {relativeTo: this.activateRoute })

  }
}
