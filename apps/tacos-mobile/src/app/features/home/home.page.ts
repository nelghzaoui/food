import { Component } from '@angular/core';
import { ApiService } from '../../core/api/api.service';

@Component({
  selector: 'food-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private readonly apiService: ApiService) {}

  onCall() {
    this.apiService.get('food').subscribe((food) => {
      console.log('food', food);
    });
  }
}
