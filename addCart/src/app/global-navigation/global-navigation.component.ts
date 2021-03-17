import { Component, OnInit } from '@angular/core';
import { AddCartService } from '../../services/add-cart.service';

@Component({
  selector: 'app-global-navigation',
  templateUrl: './global-navigation.component.html',
  styleUrls: ['./global-navigation.component.scss']
})
export class GlobalNavigationComponent implements OnInit {

  globalNavItems = [];

  constructor(private addCartService: AddCartService) { }

  ngOnInit() {

    this.addCartService.getGlobalNavigation().subscribe(this.globalNavigationItems.bind(this))

    
  }

  globalNavigationItems(data: any) {
    this.globalNavItems = []
    data.forEach((elm) => {
      this.globalNavItems.push(elm)
    });
    console.log(this.globalNavItems)

  }

}
