import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { BeerComponent } from './beer/beer.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'user', component: UserComponent},
  { path: 'beer', component: BeerComponent},
  { path: 'recipe', component: RecipeComponent},
  { path: 'welcome', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
