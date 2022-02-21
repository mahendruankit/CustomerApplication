import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'grid-ui',
  templateUrl: './CustomerApp.Grid.html',
})
export class GridComponent {
  gridColumns: Array<any> = new Array<any>();
  gridData: Array<Object> = new Array<Object>();

  @Input('grid-columns')
  set setGridColums(_gridCoumns: Array<any>) {
    this.gridColumns = _gridCoumns;
  }

  @Input('grid-data')
  set setGridData(_gridData: Array<Object>) {
    this.gridData = _gridData;
  }

  @Output('grid-selected')
  eventemitter: EventEmitter<Object> = new EventEmitter<Object>();
  selectGrid(_selected: Object) {
    this.eventemitter.emit(_selected);
  }
}
