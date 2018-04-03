import { Injectable } from '@angular/core';
import {Post} from './post-model/post.model';

@Injectable()
export class PostService{

    posts: Post[] = [
        new Post(1, "Bruna", "oi", 0),
        new Post(2, "Bruna", "okjjkkki", 0)
    ];

    inserir(post:Post){
        this.posts.push(post);
    };

    excluir(id){
        let aux: Post[] = [];
        for ( let post of this.posts ){
            if( post.id != id ){
                aux.push(post);
            } 
        }
        this.posts = aux;
    };

    buscarPosts(){
        return this.posts;
    };

    adicionarLike(post:Post){
        post.qtdLikes ++;
    };
}