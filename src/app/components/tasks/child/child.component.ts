import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {
   
  }
  @Input() childData: string ='' 
  @Output() sendDataToParent = new EventEmitter<string>(); 

  childInputData: string = '';
  sendData() {
    this.sendDataToParent.emit(this.childInputData);
  }
}
