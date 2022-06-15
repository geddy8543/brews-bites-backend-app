import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { BeerComponent } from './beer/beer.component';
import { RecipeComponent } from './recipe/recipe.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UnauthenticatedComponent } from './unauthenticated/unauthenticated.component';
import { AuthenticationGuard } from './authentication/authentication.guard';

const routes: Routes = [
   { path: '', component: UnauthenticatedComponent },
   { path: 'user', canActivate: [AuthenticationGuard], component: UserComponent},
   { path: 'beer', canActivate: [AuthenticationGuard], component: BeerComponent},
   { path: 'beer/:id', canActivate: [AuthenticationGuard], component: BeerComponent },
   { path: 'recipe', canActivate: [AuthenticationGuard],component: RecipeComponent},
   { path: 'recipe/:id', canActivate: [AuthenticationGuard], component: RecipeComponent },
   { path: 'welcome', canActivate: [AuthenticationGuard],component: WelcomeComponent},
   { path: 'login', component: LoginComponent},
   { path: 'signup', component: SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
