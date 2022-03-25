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
  Style = Style;
  STEPS = STEPS;

  currentStep$ = this.tacosQuery.currentStep$;
  styles$ = this.tacosQuery.styles$;
  sizes$ = this.tacosQuery.sizes$;
  meats$ = this.tacosQuery.meats$;
  sauces$ = this.tacosQuery.sauces$;
  garnishes$ = this.tacosQuery.garnishes$;
  gratins$ = this.tacosQuery.gratins$;

  constructor(private readonly tacosQuery: TacosQuery, private readonly tacosService: TacosService) {}

  ngOnInit(): void {}

  onSegmentChange(event: Event) {
    this.tacosService.update({ currentStep: (event as SegmentCustomEvent).detail.value as Step });
  }

  onSelect(selectedFood: MobileFood[]) {
    this.handleSelect(selectedFood);
  }

  private handleSelect(selectedFood: MobileFood[]) {
    const state = this.tacosQuery.getValue();

    switch (state.currentStep) {
      case Step.STYLE:
        this.tacosService.update({ currentStep: Step.SIZE, selectedStyle: selectedFood[0].name as Style });
        break;
      case Step.SIZE:
        break;
      case Step.MEAT:
        break;
      case Step.SAUCE:
        break;
      case Step.GARNISH:
        break;
      case Step.GRATIN:
        break;
      default:
        break;
    }
  }
}
