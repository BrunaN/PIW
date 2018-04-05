export class Post{
    id: string;
    nomePessoa: string;
    texto: string;
    qtdLikes: number = 0;
    
    // static instancias: number = 0;

    constructor(id, nomePessoa, texto, qtdLikes){
        // this.id = Post.instancias++;
        this.id = id;
        this.nomePessoa = nomePessoa;
        this.texto = texto;
        this.qtdLikes = qtdLikes;
    }
}