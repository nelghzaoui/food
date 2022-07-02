import { Component, OnInit } from '@angular/core';
import { SegmentCustomEvent } from '@ionic/angular';
import { MobileFood } from '../../../../../../core/services/food/models/mobile-food.interface';
import { TacosQuery } from '../redux/tacos.query';
import { TacosService } from '../services/tacos.service';
import { Style } from '../models/style.interface';
import { Step } from '../models/step.enum';
import { STEPS } from '../models/step.enum';

@Component({
  selector: 'food-order-tacos',
  templateUrl: './tacos.component.html',
  styleUrls: ['./tacos.component.scss']
})
export class TacosComponent implements OnInit {
  Step = Step;
  STEPS = STEPS;

  currentStep$ = this.tacosQuery.currentStep$;
  sizes$ = this.tacosQuery.sizes$;
  meats$ = this.tacosQuery.meats$;
  sauces$ = this.tacosQuery.sauces$;
  garnishes$ = this.tacosQuery.garnishes$;

  constructor(private readonly tacosQuery: TacosQuery, private readonly tacosService: TacosService) {}

  ngOnInit(): void {
    this.tacosService.init();
  }

  onSegmentChange(event: Event) {
    this.tacosService.update({ currentStep: (event as SegmentCustomEvent).detail.value as Step });
  }

  onSelect(selectedFood: MobileFood[]) {}
}
