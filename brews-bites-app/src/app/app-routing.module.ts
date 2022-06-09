import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { BeerComponent } from './beer/beer.component';
import { RecipeComponent } from './recipe/recipe.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UnauthenticatedComponent } from './unauthenticated/unauthenticated.component';

const routes: Routes = [
   { path: '', component: UnauthenticatedComponent },
   { path: 'user', component: UserComponent},
   { path: 'beer', component: BeerComponent},
   { path: 'recipe', component: RecipeComponent},
   { path: 'welcome', component: WelcomeComponent},
   { path: 'login', component: LoginComponent},
   { path: 'signup', component: SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
