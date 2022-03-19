import { Injectable } from '@angular/core';
import { transaction } from '@datorama/akita';
import { TacosState, TacosStore } from '../redux/tacos.store';
import { TacosServiceFacade } from './tacos.api';

@Injectable()
export class TacosService implements TacosServiceFacade {
  constructor(private readonly tacosStore: TacosStore) {}

  @transaction()
  update(value: Partial<TacosState>): void {
    this.tacosStore.update(value);
  }

  reset(): void {
    this.tacosStore.reset();
  }
}
