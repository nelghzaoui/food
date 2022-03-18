import { Component, OnInit } from '@angular/core';
import { SegmentCustomEvent } from '@ionic/angular';
import { OrderFlow } from '../models/order-flow.enum';
import { OrderService } from '../services/order.service';
import { OrderQuery } from '../redux/order.query';

@Component({
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss']
})
export class OrderPage implements OnInit {
  OrderFlow = OrderFlow;
  currentFlow$ = this.orderQuery.currentFlow$;

  constructor(private readonly orderService: OrderService, private readonly orderQuery: OrderQuery) {}

  ngOnInit(): void {}

  onSegmentChange(event: Event) {
    this.orderService.update({ currentFlow: (event as SegmentCustomEvent).detail.value as OrderFlow });
  }
}
