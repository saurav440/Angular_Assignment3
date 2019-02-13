import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from 'src/app/weather/weather.component';
import { MovieComponent } from 'src/app/movie/movie.component';
import { CurrencyComponent } from 'src/app/currency/currency.component';

const routes: Routes = [
    {path :'weather',component: WeatherComponent},
    {path :'movie',component: MovieComponent},
    {path :'currency',component: CurrencyComponent},
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }