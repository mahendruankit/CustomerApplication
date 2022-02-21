import { Component } from '@angular/core';
import { Customer } from './CustomerApp.model';
import { ILogger, ConsoleLogger } from '../Utility/CustomerApp.Logger';

@Component({
  templateUrl: './CustomerApp.CustomerView.html',
  styleUrls: ['./CustomerApp.CustomerComponent.scss'],
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();
  Logobj: ILogger = new ConsoleLogger();

  constructor() {
    this.Logobj.Log();
  }

  selectCustomer(_selected: any) {
    this.CustomerModel = _selected;
  }

  Add() {
    this.CustomerModels.push(this.CustomerModel);
    //Clear UI
    this.CustomerModel = new Customer();
  }
}
