import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  host = 'http://localhost:3000/app/';
  constructor(private httpClient: HttpClient) { }

  getJsonfromBE(country: string): any {
    let countryCode
    switch (country) {
      case "australia":
      countryCode="au"
      break;
      case "canada":
        countryCode = "CA"
        break;
      case "america":
        countryCode = "US"

    }

    return this.httpClient.get(`http://localhost:3000/app/${countryCode}`)
  }


}
