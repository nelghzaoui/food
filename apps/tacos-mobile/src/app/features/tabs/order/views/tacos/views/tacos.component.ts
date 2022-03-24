import { Component, OnInit } from '@angular/core';
import { SegmentCustomEvent } from '@ionic/angular';
import { TacosQuery } from '../redux/tacos.query';
import { TacosService } from '../services/tacos.service';
import { Style } from '../models/style.interface';
import { STEPS, TacosStep } from '../models/step.enum';

@Component({
  selector: 'food-order-tacos',
  templateUrl: './tacos.component.html',
  styleUrls: ['./tacos.component.scss']
})
export class TacosComponent implements OnInit {
  STEPS = STEPS;
  TacosStep = TacosStep;
  TacosStyle = Style;

  currentStep$ = this.tacosQuery.currentStep$;

  constructor(private readonly tacosQuery: TacosQuery, private readonly tacosService: TacosService) {}

  ngOnInit(): void {}

  onSegmentChange(event: Event) {
    this.tacosService.update({ currentStep: (event as SegmentCustomEvent).detail.value as TacosStep });
  }
}
