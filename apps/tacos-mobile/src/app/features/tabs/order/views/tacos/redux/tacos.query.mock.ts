import { of } from 'rxjs';

export class OrderQueryMock {
  currentStep$ = of('currentStep');
}
