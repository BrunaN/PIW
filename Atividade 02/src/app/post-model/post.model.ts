export class Post{
    id: number;
    nomePessoa: string;
    texto: string;
    qtdLikes: number;
    static instancias: number = 0;

    constructor(id, nomePessoa, texto, qtdLikes){
        this.id = Post.instancias++;
        this.nomePessoa = nomePessoa;
        this.texto = texto;
        this.qtdLikes = qtdLikes;
    }
}