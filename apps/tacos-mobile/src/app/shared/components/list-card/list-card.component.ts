import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MobileFood } from '../../../core/services/food/models/mobile-food.interface';

@Component({
  selector: 'food-shared-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListCardComponent implements OnDestroy {
  @Input() foods: MobileFood[] | null = null;
  @Input() quantity = 0;
  @Output() selected = new EventEmitter<MobileFood[]>();

  private selectedFoods: MobileFood[] = [];

  ngOnDestroy(): void {
    this.selectedFoods = [];
  }

  onSelect(selectedFood: MobileFood): void {
    this.selectedFoods.push(selectedFood);

    if (this.selectedFoods.length === this.quantity || (this.quantity === 0 && this.selectedFoods.length <= 5)) {
      this.selected.emit(this.selectedFoods);
    }
  }

  // TODO: Render the visual part for the user
  get isSelected(): boolean {
    let isIncluded = false;

    this.selectedFoods.forEach((selectedFood: MobileFood) => {
      isIncluded = this.selectedFoods.includes(selectedFood);
    });

    return isIncluded;
  }

  getLabelPath(food: MobileFood): string {
    return `order.tacos.${food.category}.${food.name}`;
  }
}
