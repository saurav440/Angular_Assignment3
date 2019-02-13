import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:Http) { }

  weatherService(searchCity){
    return this.http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22%27 "+searchCity+ "%27%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
              .pipe(map( (response) => {
                return response.json();       
              })
            );
  }

  moviesService(movieName){
 return this.http.get("http://www.omdbapi.com/?t=%27"+ movieName +"%27&apikey=8b8b3f2")
                  .pipe(map( (response) => {
                    return response.json();      
                  })
                );
  }

  currencyService(cur){
    return this.http.get("http://api.fixer.io/latest?base=" + cur)
                    .pipe(map( (response) => {
                      return response.json();      
                    })
                  );
  }
}
