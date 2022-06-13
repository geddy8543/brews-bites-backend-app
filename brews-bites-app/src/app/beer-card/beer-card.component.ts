import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BeerService } from '../beer/beer.service';
import { Beer } from '../beer/beer.component';


@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent implements OnInit {
  pageTitle: string = 'Beer Details';
  beer: Beer | undefined;
  

  constructor(private beerService: BeerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getBeers();
  }
  getBeers(): void {
    // this.beerService.getBeers()
    // .subscribe(beers => this.beers = beers);
    console.log("get beers")
  }
  onBack(): void {
    this.router.navigate(['/beer']);
  }

}
