import { Component } from '@angular/core';
import { Step } from '../../models/step.enum';
import { TacosService } from '../../services/tacos.service';
import { TacosQuery } from '../../redux/tacos.query';
import { Style } from '../../models/style.interface';

@Component({
  selector: 'food-order-tacos-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent {
  Step = Step;

  styles$ = this.tacosQuery.styles$;

  constructor(private readonly tacosService: TacosService, private readonly tacosQuery: TacosQuery) {}

  onSelect(selectedStyle: string) {
    this.tacosService.update({
      currentStep: Step.SIZE,
      selectedStyle: selectedStyle as Style
    });
  }
}
