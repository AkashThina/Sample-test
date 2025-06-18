import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    try {
      const clientInfo = {"deviceID": "6896dc418df5eaf4f27ab51fd02da953", "deviceID2": "6896dc418df5eaf4f27ab51fd02da953", "deviceTimeZone": "Wed Apr 30 2025 10:43:07 GMT+0530 (India Standard Time)", "deviceDateTime": "30-Apr-2025 10:43", "deviceIpAddress": "168.122.1.1", "deviceLatitude": "0", "deviceLongitude": "0", "deviceType": "Web", "deviceModel": "Chrome" , "deviceVersion": "136", "deviceUserID": "", "deviceAppVersion": "1.3.0"}
      const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjFFNjRBNDNBNDY3MjgyRjhDOUYxQzlEMjE1NjVGOUI2QzVGOTA5OUIiLCJ0eXAiOiJKV1QifQ.eyJzZXNzaW9uSUQiOiJhZjdlNDI3My01NzJmLTQ0NDUtYTg4YS04NmEwZmQzNzQ2OTgiLCJuYmYiOjE3NDg4NDEzMzEsImV4cCI6MTc1MjQ0MTMzMSwiaWF0IjoxNzQ4ODQxMzMxLCJpc3MiOiJCQzcyRTczQUNBQkY0NzcyOEE3RUQ2MTlDREM3OUMwMSIsImF1ZCI6IjRENTIxMkI3QzA3NTQ0OTJCNjZDRDNCRDM1QzFGNzJBIn0.MJc7lAW8KNq4pkBU_jpDyGU9j1OegwACMp1SlgoVSGtfSRudv5_A0MlbTO2eX3iHpZdWug0iahnJ-9M06BUleDBxuQ0nJk5zEi7HVGrZtYGRg7nULvvzo41KALzLtD6zW-7atdE4Hhp4Ob2PS4O4EAvcS2dIpq9LE8gO713rGldUgsI_FwkQZtD5zq2TFOPvBLfSztrss33uxhXfxeoG6qMRTVcILMlZwFCTaB-nnmAZqaSg0ZN3Lcc9C7HDBjozHmm3r45UYV6KI2n9E437TJfZEHY3Do2W6PC6iNrzRT_m-KO4221MOPNgtN7LU22mmBBgiCcbeJYWl6MG0VGQpg'
    
      const fingerprint = "6896dc418df5eaf4f27ab51fd02da953"
      if (token) {
        const authReq = req.clone({
          setHeaders: {
            clientInfo :JSON.stringify(clientInfo),
            Authorization: `Bearer ${token}`,
            fingerprint :`${fingerprint}`
          }
        });
        return next.handle(authReq);
      }

      return next.handle(req);
    } 
    catch (error) {
      console.error('AuthInterceptor error:', error);
      return next.handle(req);
    }
  }
}
