import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'food-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor(private readonly navCtrl: NavController) {}

  ngOnInit(): void {
    //TODO: This screen should appear only the first time
  }

  onClick(): void {
    this.navCtrl.navigateForward(['order']);
  }
}
