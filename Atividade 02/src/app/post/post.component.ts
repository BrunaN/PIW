import { Post } from './../post-model/post.model';
import { PostService } from '../post.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Output() recebeuLike= new EventEmitter();

  constructor(private postService: PostService) {}

  ngOnInit() {
  }

  like(){
    this.postService.adicionarLike(this.post)
    .subscribe(data => console.log(data),
                error => console.log(error));
    // this.recebeuLike.emit(this.post);
  }

  delete(){
    this.postService.excluir(this.post.id)
    .subscribe(data => console.log(data),
                error => console.log(error));
  }

}
