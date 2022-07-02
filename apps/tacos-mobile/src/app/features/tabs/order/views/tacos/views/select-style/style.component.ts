import { Component } from '@angular/core';
import { Step } from '../../models/step.enum';
import { TacosService } from '../../services/tacos.service';
import { TacosQuery } from '../../redux/tacos.query';
import { Style } from '../../models/style.interface';
import { MobileFood } from '../../../../../../../core/services/food/models/mobile-food.interface';

@Component({
  selector: 'food-order-tacos-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent {
  isGratin = false;
  Step = Step;
  Style = Style;

  styles$ = this.tacosQuery.styles$;
  gratins$ = this.tacosQuery.gratins$;

  constructor(private readonly tacosService: TacosService, private readonly tacosQuery: TacosQuery) {}

  onSelect(selectedFood: MobileFood) {
    const selectedStyle = selectedFood.name as Style;
    this.isGratin = selectedStyle === Style.GRATIN;
  }

  private handleSelect(selectedStyle: Style) {
    this.tacosService.update({ currentStep: Step.SIZE, selectedStyle });
  }
}
