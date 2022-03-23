import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { OrderFlow, orderFlows } from '../models/order-flow.enum';

@Component({
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
  selector: 'food-order-page'
})
export class OrderPage {
  OrderFlow = OrderFlow;
  flows = orderFlows;

  constructor(private readonly navCtrl: NavController, private readonly route: ActivatedRoute) {}

  onSelect(flow: OrderFlow) {
    this.navCtrl.navigateForward([flow], { relativeTo: this.route });
  }
}
