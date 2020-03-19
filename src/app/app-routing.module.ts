import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';


const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'country/:con',component:CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,CountryComponent]
