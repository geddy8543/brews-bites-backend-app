import { Component, OnInit } from '@angular/core';
import { Beer, BeerService } from '../beer/beer.service';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent implements OnInit {
  beers: Beer[] = [];

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.getBeers();
  }
  getBeers(): void {
    // this.beerService.getBeers()
    // .subscribe(beers => this.beers = beers);
    console.log("get beers")
  }

}
