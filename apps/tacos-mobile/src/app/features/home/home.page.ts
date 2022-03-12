import { Component } from '@angular/core';
import { FoodService } from '../../core/food/services/food.service';

@Component({
  selector: 'food-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private readonly foodService: FoodService) {}

  onCall() {}
}
