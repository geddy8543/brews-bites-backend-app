import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../beer/beer.component';


@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent  {
  pageTitle: string = 'Beer Details';
  @Input() beer?: Beer;
  
}

