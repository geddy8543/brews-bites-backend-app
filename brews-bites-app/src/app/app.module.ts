// root module of the app; contains all parts of the app that will be used
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BeerComponent } from './beer/beer.component';
import { RecipeComponent } from './recipe/recipe.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UnauthenticatedComponent } from './unauthenticated/unauthenticated.component';
import { RequestInterceptor } from './authentication/interceptors/request.interceptor';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { NewBeerComponent } from './new-beer/new-beer.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';


@NgModule({
  // all components that belong to the root module
  declarations: [
    AppComponent,
    UserComponent,
    BeerComponent,
    RecipeComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    UnauthenticatedComponent,
    BeerCardComponent,
    RecipeCardComponent,
    NewBeerComponent,
    NewRecipeComponent,
  ],
  imports: [
    // tells Angular about other modules needed for the app to function
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [{
    // services the app needs
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true,
  }],
  // entry component that creates the components listed in the app component array
  bootstrap: [AppComponent]
})
export class AppModule { }
