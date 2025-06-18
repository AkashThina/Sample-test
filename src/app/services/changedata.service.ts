import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangedataService {
  ChangeData1:string = 'Data From services'
  constructor() { }

  changeData(data:any){
    this.ChangeData1 = data
  }
}
