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
        return this.http.post(this.urlPosts, post)
            .map((response: Response) => {
                let aux = response.json();
                post.id = aux.id;
                this.posts.push(post);
                return aux;
            })
            .catch((error: Response) => Observable.throw(error));
    };

    excluir(id){
        return this.http.delete((this.urlPosts + "/" + id), id)
            .map((response: Response) => {
                for ( let i = 0; i < this.posts.length; i++ ){
                    if( this.posts[i].id == id){
                        this.posts.splice(i, 1);
                    }
                }
                return response.text;
            })
            .catch((error: Response) => Observable.throw(error));
    };

    buscarPosts(){
        return this.http.get(this.urlPosts)
            .map((response: Response) => {
                this.posts = [];
                for( let post of response.json()){
                    this.posts.push(new Post(post.id, post.nomePessoa, post.texto, post.qtdLikes))
                }
                return this.posts;
            })
            .catch((error: Response) => Observable.throw(error));
    };

    editarPost(post:Post){
        return this.http.put((this.urlPosts + "/" + post.id), post)
    };
}
