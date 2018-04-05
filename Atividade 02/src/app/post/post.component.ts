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

  editarPost: boolean = false;
  concluido: boolean = false;
  
  constructor(private postService: PostService) {}

  ngOnInit() {
  }

  like(){
    this.post.qtdLikes++;
    this.postService.editarPost(this.post)
    .subscribe(data => console.log(data),
                error => console.log(error));
  }

  delete(){
    this.postService.excluir(this.post.id)
    .subscribe(data => console.log(data),
                error => console.log(error));
  }

  editar(){
    this.editarPost = true;
  }

  concluir(){
    this.postService.editarPost(this.post)
    .subscribe(data => {
                this.concluido = true;
                this.editarPost = false;
                console.log(data)},
                error => console.log(error));
  }

  cancelar(){
    this.editarPost = false;
  }

}
