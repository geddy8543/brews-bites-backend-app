import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BeerService } from './beer.service';

export interface Beer {
  beerId: "";
  name: "";
  style: "";
  description: Text;
  imageUrl: "";
  recipePairing: number;
}


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  beerResponse: BehaviorSubject<any> = new BehaviorSubject({});
  beers: BehaviorSubject<any> = new BehaviorSubject([]);
  sub: any;
  beerParams: any;
  
  
  constructor(private beerService: BeerService, private router: Router) { }

  

  ngOnInit(): void {
    this.sub = this.beerParams.getBeers().subscribe({
      next: (beers: any) => beers,
     
    })
    
  }

}
