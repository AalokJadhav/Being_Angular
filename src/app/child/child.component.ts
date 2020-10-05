import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() public childData = new EventEmitter;

  @Input()public parentdata;
  constructor() { }

  ngOnInit() {
  }
  SendDataToPar() {
    this.childData.emit('This is the data coming from child');
  }

}
