import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BeerService } from './beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  beerResponse: BehaviorSubject<any> = new BehaviorSubject({});
  beers: BehaviorSubject<any> = new BehaviorSubject([]);
  
  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.onGetBeers();
  }

  onGetBeers() {
    this.beerService.getBeers().subscribe(
      (response: any) => {
        this.beerResponse.next(response);
      },
      (error: any) => console.log(error),
      () => {
        this.beers.next(this.beerResponse.value)
        console.log(this.beerResponse.value)
      }
    )
  }
}
