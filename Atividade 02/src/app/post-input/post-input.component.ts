import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from '../post.service';
import { NgModel } from '@angular/forms';
import {Post} from './../post-model/post.model';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css']
})
export class PostInputComponent implements OnInit {

  id: number;
  nomeInput: string = "";
  textoInput: string = "";
  qtdLikes: number = 0;

  constructor( private postService: PostService) { }

  ngOnInit() {
  }

  submit(event){
    event.preventDefault();
    this.postService.inserir(new Post(this.id, this.nomeInput, this.textoInput, this.qtdLikes))
      .subscribe(data => console.log(data),
                error => console.log(error));
  }
}
