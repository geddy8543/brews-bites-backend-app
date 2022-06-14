import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BeerService } from './beer.service';

export interface Beer {
  beerId: "";
  name: "";
  style: "";
  description: Text;
  image_url: "";
  recipePairing: number;
}


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  beerResponse: BehaviorSubject<any> = new BehaviorSubject({});
  beers: Beer[]=[];
  sub: any;
  selectedBeer: Beer | null = null;
  
  
  constructor(private beerService: BeerService, private router: Router) { }

  

  ngOnInit(): void {
    this.sub = this.beerService.getBeers().subscribe({
      next: (beers) => this.beers=beers,
     
    })
    
  }

  handleMoreInfoClick(beer: Beer) {
   this.selectedBeer = beer;
   console.log(this.selectedBeer)

  }

  onBack(): void {
    this.selectedBeer = null;
  }    

}
