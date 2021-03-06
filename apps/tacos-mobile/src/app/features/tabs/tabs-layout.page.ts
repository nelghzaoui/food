import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <ion-tabs>
      <ion-tab-bar mode="md" color="primary">
        <ion-tab-button tab="home">
          <ion-icon name="home"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="order">
          <ion-icon name="fast-food"></ion-icon>
          <ion-label>Order</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="basket" disabled="true">
          <ion-icon name="basket"></ion-icon>
          <ion-label>Basket</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="plus" disabled="true">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
          <ion-label>Plus</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `
})
export class TabsLayoutPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
