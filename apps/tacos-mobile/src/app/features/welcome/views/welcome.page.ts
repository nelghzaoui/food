import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'food-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss']
})
export class WelcomePage implements OnInit {
  constructor(private readonly navCtrl: NavController) {}

  ngOnInit(): void {
    //TODO: This screen should appear only the first time
  }

  onClick(): void {
    this.navCtrl.navigateForward(['tabs']);
  }
}
