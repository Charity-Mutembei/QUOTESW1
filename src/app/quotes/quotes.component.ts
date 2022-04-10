import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quotes [] = [
    // (name:string, id:number, quote:string, upvote:number, downvote:number)
    new Quotes('quotes authors name', 1, 'quote', 0, 0, ),
    new Quotes('quotes authors name', 2, 'quote', 0, 0, ),
    new Quotes('quotes authors name', 3, 'quote', 0, 0, ),
    new Quotes('quotes authors name', 4, 'quote', 0, 0, ),
    new Quotes('quotes authors name', 5, 'quote', 0, 0, ),
    new Quotes('quotes authors name', 6, 'quote', 0, 0, ),
    new Quotes('quotes authors name', 7, 'quote', 0, 0, )
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
