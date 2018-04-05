import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Post} from './post-model/post.model';

@Injectable()
export class PostService{

    urlPosts: string = "http://rest.learncode.academy/api/bruna/posts";

    constructor(private http: Http) {};
    
    posts : Post[] = [];

    inserir(post:Post){
        this.posts.push(post);
        return this.http.post(this.urlPosts, post)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error));
    };

    excluir(id){
        // for ( let i = 0; i < this.posts.length; i++ ){
        //     if( this.posts[i].id == id){
        //         this.posts.splice(i, 1);
        //     } 
        // }
        return this.http.delete((this.urlPosts + "/" + id), id)
            .map((response: Response) => response.text)
            .catch((error: Response) => Observable.throw(error));
    };

    buscarPosts(){
        return this.http.get(this.urlPosts)
            .map((response: Response) => {
                this.posts = [];
                for( let post of response.json()){
                    this.posts.push(new Post(post.id, post.nomePessoa, post.texto, post.qtdlikes))
                }
                return this.posts;
            })
            .catch((error: Response) => Observable.throw(error));
    };

    adicionarLike(post:Post){
        return this.http.put((this.urlPosts + "/" + post.id), {qtdLikes : post.qtdLikes++})
    };
}