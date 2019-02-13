import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: []
})
export class WeatherComponent implements OnInit {
  
  weatherData : object={}
  searchCity :string ;
  status :string;

  constructor(private sharedService :SharedService) { }

  ngOnInit() {
  }

  submitHandler(city,state){
    this.searchCity = city +',' + state;
    this.sharedService.weatherService(this.searchCity)
                      .subscribe( (resp) => {
                        this.status = "success";
                        this.weatherData = resp;
                        console.log(this.weatherData)
                    });
  }

}
