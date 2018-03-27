import { Post } from './../post-model/post.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Output() recebeuLike= new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  like(){
    this.post.qtdLikes ++;
    this.recebeuLike.emit(this.post);
  }

}
