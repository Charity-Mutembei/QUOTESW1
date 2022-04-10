import { Quote } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote = new Quotes ("", 0, "", 0, 0,);
  @Output () addQuotes = new EventEmitter<Quotes>();
  
  submitQuotes(){
    this.addQuotes.emit(this.newQuote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
