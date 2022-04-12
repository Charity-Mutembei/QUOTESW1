export class Quotes {
    name: string;
    id: number;
    quote: string;
    author: string;
    client: string;
    upvote: number;
    downvote: number;
    
    constructor(name:string, id:number, quote:string, author:string, client:string, upvote:number, downvote:number){
        this.name = name;
        this.id = id;
        this.quote = quote;
        this.author = author;
        this.client = client;
        this.upvote = downvote;
        this.downvote = downvote;
    }


}
