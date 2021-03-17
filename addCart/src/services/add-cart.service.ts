import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCartService {

  constructor() { }

  getGlobalNavigation() {
   return of([
     {label: "Home", routerLink: "home"},
     {label: "Shop By Category", routerLink: "shop-by-category"},
     {label: "offers", routerLink: "offers"},
     {label: "cart", routerLink: "cart"}
    ])
  }

}
