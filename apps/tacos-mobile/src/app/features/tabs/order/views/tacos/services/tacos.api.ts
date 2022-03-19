import { TacosState } from '../redux/tacos.store';

export interface TacosServiceFacade {
  update(value: Partial<TacosState>): void;
}
