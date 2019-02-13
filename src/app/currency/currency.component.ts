import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: []
})
export class CurrencyComponent implements OnInit {

  rateDetails :object = {};
  constructor(private sharedService:SharedService) { }

  ngOnInit() {
  }
  submitCurrencyHandler(cur) {
    this.sharedService.currencyService(cur)
    .subscribe((resp) =>{
      console.log(resp);
      this.rateDetails = resp;
    })
  }

}
