import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-beer',
  templateUrl: './new-beer.component.html',
  styleUrls: ['./new-beer.component.css']
})
export class NewBeerComponent implements OnInit {

    @Output() submitNewBeer= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
