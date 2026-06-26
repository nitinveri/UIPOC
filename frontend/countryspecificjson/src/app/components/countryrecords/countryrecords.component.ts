import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonService } from 'src/app/services/json-service.service';


@Component({
  selector: 'app-countryrecords',
  templateUrl: './countryrecords.component.html',
  styleUrls: ['./countryrecords.component.scss']
})
export class CountryrecordsComponent implements OnInit {

countryName:any
resultjson:any


constructor(private jsonService:JsonService){

}
  ngOnInit(): void {
   // this.getCountrySpecificData()
   this.ontest()
  }


ontest(){
  
var  obs=new Observable(function subscribe(subscriber){
subscriber.next("One")
subscriber.next("Two")
subscriber.complete()

})

console.log("Three");

obs.subscribe(

    x=>console.log(x),
    (e)=>console.log(e),
    ()=>console.log("Four")
);
console.log('Five')

}


getCountrySpecificData():any{
console.log("inside method")
  this.jsonService.getJsonfromBE(this.countryName.toLocaleLowerCase()).subscribe((data: any)=>
  this.resultjson=data 
 
  )
 
  console.log(this.resultjson)
}


}
