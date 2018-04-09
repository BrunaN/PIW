import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from '../post.service';
import { NgModel } from '@angular/forms';
import {Post} from './../post-model/post.model';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css'],
  providers:[RouterModule]
})
export class PostInputComponent implements OnInit {

  id: number;
  nomeInput: string = "";
  textoInput: string = "";
  qtdLikes: number = 0;
  submeter: boolean = false;

  constructor( private postService: PostService, private router: Router) {
  }

  ngOnInit() {
  }

  submit(event){
    event.preventDefault();
    this.submeter = true;
    this.postService.inserir(new Post(this.id, this.nomeInput, this.textoInput, this.qtdLikes))
      .subscribe(data => {
                this.submeter = false;
                this.router.navigate(['/linhadotempo']);},
                error => console.log(error));
  }
}
