import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beer } from '../beer/beer.component';


@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent  {
  pageTitle: string = 'Beer Details';
  @Input() beer?: Beer;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

    onBack(): void {
      this.router.navigate(['/beers']);
    }    
  
}




