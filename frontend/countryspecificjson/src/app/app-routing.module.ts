import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryrecordsComponent } from './components/countryrecords/countryrecords.component';

const routes: Routes = [
  {
    path:'getcountrydata',
    component:CountryrecordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
