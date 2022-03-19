import { Component, OnInit } from '@angular/core';
import { NavController, SegmentCustomEvent } from '@ionic/angular';
import { OrderFlow } from '../models/order-flow.enum';
import { OrderService } from '../services/order.service';
import { OrderQuery } from '../redux/order.query';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss']
})
export class OrderPage implements OnInit {
  OrderFlow = OrderFlow;
  currentFlow$ = this.orderQuery.currentFlow$;

  constructor(
    private readonly navCtrl: NavController,
    private readonly route: ActivatedRoute,
    private readonly orderService: OrderService,
    private readonly orderQuery: OrderQuery
  ) {}

  ngOnInit(): void {}

  onSegmentChange(event: Event) {
    this.navCtrl.navigateForward([(event as SegmentCustomEvent).detail.value], { relativeTo: this.route });
    this.orderService.update({ currentFlow: (event as SegmentCustomEvent).detail.value as OrderFlow });
  }
}
