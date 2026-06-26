import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
//import {}

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}
//get country data
  @Get(':country')
  getJson(@Param('country') country:string): any {
    try{
      return this.appService.getJson(country);
    }
    catch(error){
      console.log("error is"+error)
    }

  }
}
