import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { ApiService } from '../../api/api.service';
import { MobileFood } from '../models/mobile-food.interface';

@Injectable({ providedIn: 'root' })
export class FoodService {
  private readonly FOOD_API = 'food';

  private readonly foodsSubject$ = new BehaviorSubject<MobileFood[]>([]);
  foods$ = this.foodsSubject$.asObservable();

  constructor(private readonly apiService: ApiService) {
    this.getAllFoods();
  }

  private getAllFoods() {
    this.apiService
      .get<MobileFood[]>(this.FOOD_API)
      .pipe(take(1))
      .subscribe((foods: MobileFood[]) => this.foodsSubject$.next(foods));
  }
}
