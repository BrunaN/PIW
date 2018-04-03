import { Injectable } from '@angular/core';
import {Post} from './post-model/post.model';

@Injectable()
export class PostService{

    posts = [
        new Post(1, "Bruna", "oi", 0),
        new Post(2, "Bruna", "okjjkkki", 0)
    ];

    inserir(post:Post){
        this.posts.push(post);
    };

    excluir(id){
        for ( let i = 0; i < this.posts.length; i++ ){
            if( this.posts[i].id == id){
                this.posts.splice(i, 1);
            } 
        }
    };

    buscarPosts(){
        return this.posts;
    };

    adicionarLike(post:Post){
        post.qtdLikes ++;
    };
}