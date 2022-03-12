import { Component, OnInit } from '@angular/core';
import { Place, PLACES } from '../../models/place.interface';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'food-order-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss']
})
export class PlacePage implements OnInit {
  Place = Place;
  places: Place[] = PLACES;

  constructor(private readonly orderService: OrderService) {}

  ngOnInit(): void {}

  onSelect(selectedPlace: Place) {
    this.orderService.update({ selectedPlace });
  }
}
