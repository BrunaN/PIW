import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css'],
  providers: [PostService]
})
export class PostInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
