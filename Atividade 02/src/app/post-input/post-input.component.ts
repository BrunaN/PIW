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

  id: Number;
  nomeInput: String = "";
  textoInput: String = "";

  constructor( private postService: PostService) { }

  ngOnInit() {
  }

  submit(event){
    event.preventDefault();
    this.postService.inserir(new Post(this.id, this.nomeInput, this.textoInput, 0));
  }

}
