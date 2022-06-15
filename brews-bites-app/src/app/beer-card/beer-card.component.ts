import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../beer/beer.component';

/**
 * Renders a view of a single beer
 * Note: This component requires the `beer` input to compile.
 */
@Component({
  selector: 'app-beer-card[beer]',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent  {
  pageTitle: string = 'Beer Details';
  @Input() beer!: Beer;
  
}




