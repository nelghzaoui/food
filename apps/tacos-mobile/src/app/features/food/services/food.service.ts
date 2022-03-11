import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, take } from 'rxjs';
import { ApiService } from '../../../core/api/api.service';
import { MobileFood } from '../../order/models/mobile-product.interface';

@Injectable({ providedIn: 'root' })
export class FoodService {
  private readonly FOOD_API = 'food';

  private readonly foodsSubject$ = new BehaviorSubject<MobileFood[]>([]);
  foods$ = this.foodsSubject$.asObservable();

  constructor(private readonly apiService: ApiService) {
    this.readAll();
  }

  create(): Observable<void> {
    return of();
  }

  private readAll() {
    this.apiService
      .get<MobileFood[]>(this.FOOD_API)
      .pipe(take(1))
      .subscribe((foods: MobileFood[]) => this.foodsSubject$.next(foods));
  }

  read() {}
}
