import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TacosState, TacosStore } from './tacos.store';

@Injectable()
export class TacosQuery extends QueryEntity<TacosState> {
  currentStep$ = this.select('currentStep');
  styles$ = this.select('styles');

  constructor(protected store: TacosStore) {
    super(store);
  }
}
