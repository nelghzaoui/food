import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CoreState, CoreStore } from './core.store';

@Injectable({ providedIn: 'root' })
export class CoreQuery extends QueryEntity<CoreState> {
  foods$ = this.select('foods');

  constructor(protected store: CoreStore) {
    super(store);
  }
}
