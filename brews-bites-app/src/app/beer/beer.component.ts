import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { Recipe } from '../recipe/recipe.component';
import { BeerService } from './beer.service';

export interface Beer {
  id: number;
  name: string;
  style: string;
  description: string;
  image_url: string;
  recipes: Recipe[];
}


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit, OnDestroy {
  // memory clean up
  private unSubAll$ = new Subject<void>();

  beerResponse: BehaviorSubject<any> = new BehaviorSubject({});
  beers: Beer[] = [];
  selectedBeer: Beer | null = null;
  
  constructor(private beerService: BeerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.beerService.getBeers()
    .pipe(takeUntil(this.unSubAll$))
    .subscribe({
      next: (res) => { 
        this.beers = res;
        this.route.params
          .pipe(takeUntil(this.unSubAll$))
          .subscribe((params) => {
          const selectedBeerId: number = parseInt(params['id']);
          this.selectedBeer = this.beers.find((beer) => beer.id === selectedBeerId) ?? null;
        });
      },
    });
  }

  ngOnDestroy(): void {
    this.unSubAll$.next();
    this.unSubAll$.complete();
  }

  handleMoreInfoClick(beer: Beer) {
   this.selectedBeer = beer;
   console.log(this.selectedBeer)

  }

  onBack(): void {
    this.router.navigateByUrl('/beer');
  }    

}
