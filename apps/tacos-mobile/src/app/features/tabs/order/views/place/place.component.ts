import { Component, OnInit } from '@angular/core';
import { Place, PLACES } from '../../models/place.interface';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'food-order-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  Place = Place;
  places = PLACES;

  constructor(private readonly orderService: OrderService) {}

  ngOnInit(): void {}

  onSelect(selectedPlace: Place) {
    this.orderService.update({ selectedPlace });
  }
}
