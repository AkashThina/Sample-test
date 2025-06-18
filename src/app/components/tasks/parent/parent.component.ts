import { Component, OnInit } from '@angular/core';
import { ChangedataService } from 'src/app/services/changedata.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {
  parentData: string = '';   


  constructor(public servicesChangeData:ChangedataService ){}
  messageFromChild: string | undefined; 

  receiveDataFromChild(data: string) {
    this.messageFromChild = data; 
  }
  changefromparent:string=''
  ChangeFromParent(){
    this.servicesChangeData.changeData(this.changefromparent)
  }
}

