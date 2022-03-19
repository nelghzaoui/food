import { Component, OnDestroy, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AlertTool } from '../../../../../../core/services/ui/alert.tool';
import { TacosQuery } from '../redux/tacos.query';
import { TacosService } from '../services/tacos.service';
import { Style } from '../models/style.interface';
import { TacosStep } from '../models/step.enum';

@Component({
  selector: 'food-order-tacos',
  templateUrl: './tacos.component.html',
  styleUrls: ['./tacos.component.scss']
})
export class TacosComponent implements OnInit, OnDestroy {
  TacosStep = TacosStep;
  TacosStyle = Style;

  currentStep$ = this.tacosQuery.currentStep$;

  constructor(
    private readonly alertTool: AlertTool,
    private readonly tacosQuery: TacosQuery,
    private readonly tacosService: TacosService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.currentStep$.pipe(take(1)).subscribe((currentStep: TacosStep) => {
      if (currentStep !== TacosStep.STYLE) {
        this.alertTool.present('If you continue, you will lose your tacos', 'Yes', undefined, 'No');
      }
      this.tacosService.reset();
    });
  }
}
