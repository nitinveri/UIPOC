import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private jsons:any;
  getJson(country:string): string {
    const fs = require('fs')
    const filepath='src/assets/claim_'+country.toUpperCase()+'.json'
    fs.readFile(filepath, 'utf8', (err, jsonString) => {
      if (err) {
          console.log("Error reading file from disk:", err)
          return
      }
      try {
          this.jsons = JSON.parse(jsonString)
        if (country==='au')this.jsons["specialAustraliaMessage"]="We are beaten by India in Cricket so much now a days"
          console.log("Json is:",  this.jsons) // => "Customer address is: Infinity Loop Drive"
  } catch(err) {
          console.log('Error parsing JSON string:', err)
      }
  })
  return this.jsons

  }
}
