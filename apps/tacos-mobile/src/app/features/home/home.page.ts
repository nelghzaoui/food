import { Component } from '@angular/core';
import { FoodService } from '../food/services/food.service';

@Component({
  selector: 'food-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  foods$ = this.foodService.foods$;

  constructor(private readonly foodService: FoodService) {}

  onCall() {}
}
