import {Component, Input, OnInit} from '@angular/core';
import {IComment} from '../../interfaces';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-one-comment',
  templateUrl: './one-comment.component.html',
  styleUrls: ['./one-comment.component.css']
})
export class OneCommentComponent implements OnInit {
  @Input()

  comment: IComment

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

  getDetails(): void{
    this.router.navigate([this.comment.id], {relativeTo: this.activatedRoute})
  }

}
