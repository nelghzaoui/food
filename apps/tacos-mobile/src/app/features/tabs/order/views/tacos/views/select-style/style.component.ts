import { Component } from '@angular/core';
import { TacosStyle } from '../../models/style.interface';
import { TacosStep } from '../../models/step.enum';
import { TacosService } from '../../services/tacos.service';
import { TacosQuery } from '../../redux/tacos.query';

@Component({
  selector: 'food-order-tacos-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent {
  styles$ = this.tacosQuery.styles$;

  constructor(private readonly tacosService: TacosService, private readonly tacosQuery: TacosQuery) {}

  onSelect(selectedStyle: TacosStyle): void {
    this.tacosService.update({
      currentStep: TacosStep.SIZE
    });
  }
}
