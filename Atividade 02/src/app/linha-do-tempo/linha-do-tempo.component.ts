import {Post} from './../post-model/post.model';
import { PostService } from '../post.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent implements OnInit {
  
  posts : Post [];
  
  constructor( private postService:PostService) { }
  
  ngOnInit() {
    this.posts = this.postService.buscarPosts();
  }
  
  // postRecebeuLike(post){
  //   console.log(post);
  // }
  
}