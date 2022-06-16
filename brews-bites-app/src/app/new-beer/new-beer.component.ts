import { Component, EventEmitter, OnInit, Output } from '@angular/core';
 
export interface NewBeer {
  name: string;
  style: string;
  description: string;
  image_url: string
}

@Component({
  selector: 'app-new-beer',
  templateUrl: './new-beer.component.html',
  styleUrls: ['./new-beer.component.css']
})
export class NewBeerComponent implements OnInit {
  @Output() submitNewBeer= new EventEmitter<NewBeer>();
  
  newBeerParams: NewBeer = {
    name: '',
    style: '',
    description: '',
    image_url: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  addNewBeer() {
    this.submitNewBeer.emit(this.newBeerParams);
  }

}
