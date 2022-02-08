import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.MasterPageView.html',
  styleUrls: ['./CustomerApp.MasterPageView.scss'],
})
export class MasterPageComponent {
  currentYear: number = new Date().getFullYear();
}
