import { Component, OnInit } from '@angular/core';
// import { globalAgent } from 'http';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quotes [] = [
    // (quote:string, id:number, name:string, upvote:number, downvote:number)
    new Quotes('quote', 1, 'quotes authors name', 0, 0),
    new Quotes('quote', 1, 'quotes authors name', 0, 0),
    new Quotes('quote', 1, 'quotes authors name', 0, 0),
    new Quotes('quote', 1, 'quotes authors name', 0, 0),
    new Quotes('quote', 1, 'quotes authors name', 0, 0),
    new Quotes('quote', 1, 'quotes authors name', 0, 0),
    new Quotes('quote', 1, 'quotes authors name', 0, 0),
  ];

  addNewQuotes(quote:any){
    let goalLength = this.quotes.length;
    quote.id = goalLength+1;
    // goalLength.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
