import { Quote } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-complete',
  templateUrl: './quote-complete.component.html',
  styleUrls: ['./quote-complete.component.css']
})
export class QuoteCompleteComponent implements OnInit {
  @Input() quote!: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();
  quotes: Quotes [] = [];

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  deleteQuote(isComplete:any, index:any){
    if(isComplete){
      let toDelete = confirm ('Are you sure you want to delete ${this.quotes[index].name}?')

      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
