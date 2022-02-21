import { Component } from '@angular/core';
import { ILogger, ConsoleLogger } from '../Utility/CustomerApp.Logger';

@Component({
  templateUrl: './CustomerApp.HomeView.html',
})
export class HomeComponent {
  Logobj: ILogger = new ConsoleLogger();

  constructor() {
    this.Logobj.Log();
  }
}
