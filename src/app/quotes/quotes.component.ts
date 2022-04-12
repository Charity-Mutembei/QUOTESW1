import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
// import { globalAgent } from 'http';
import { Quotes } from '../quotes';
import { QuoteCompleteComponent } from '../quote-complete/quote-complete.component';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  @Input() quote!: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();
  quotes: Quotes[] = [
  ];

  addNewQuotes(quote: any) {
    let goalLength = this.quotes.length;
    quote.id = goalLength + 1;
    // goalLength.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote);
  }
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }


  deleteQuote(isComplete:any, index:any){
    if(isComplete){
      // this.quotes.splice(index,1);
      let toDelete = confirm('Are you sure you want to delete ${this.quotes[index].name}?')

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
