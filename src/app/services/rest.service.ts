import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.post(this.apiUrl,'');
  }
  private apiUrl = 'https://uat-motor-api.dmvic.com/V1/Reports/GetDSBREPORTSSTOCK';

  private Newapi = 'https://dev-api.patabima.ke/api/v1/ip/Quote/Make/GetAllMake'
  private modelApi = 'https://dev-api.patabima.ke/api/v1/ip/Quote/Model/GetAllModel';
  private CoverType ='https://dev-api.patabima.ke/api/v1/ip/Quote/CoverType/GetAllCoverType'
  private getAllBodyType ='https://dev-api.patabima.ke/api/v1/ip/Quote/BodyType/GetAllBodyType'
  private Quatation = 'https://dev-api.patabima.ke/api/v1/ip/Quote/Quotation/GetAllQuotation'

  MakeDate(){
    return this.http.post(this.Newapi,'')
  }
  getModelsByMakeId(makeId: any): Observable<any> {
    return this.http.post(this.modelApi, makeId);
  }

  CoverTypeData(){
    return this.http.post(this.CoverType,'')
  }

  getAllBody(usageTypeID: number) {
    const payload = { usageTypeID };
    return this.http.post(this.getAllBodyType, payload);
  }

  getAllQuatation(datePayload:any) {
    return this.http.post(this.Quatation, datePayload);
  }
  // getQuotationById(id: number): Observable<any> {
  //   return this.http.post(this.Quatation, { quotationID: id });
  // }
  
}
