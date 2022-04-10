export class Quotes {
    name: string;
    id: number;
    quote: string;
    upvote: number;
    downvote: number;
    
    constructor(name:string, id:number, quote:string, upvote:number, downvote:number){
        this.name = name;
        this.id = id;
        this.quote = quote;
        this.upvote = downvote;
        this.downvote = downvote;
    }


}
