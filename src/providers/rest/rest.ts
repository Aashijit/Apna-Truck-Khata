import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  post(url,data) {
    const headers = new HttpHeaders()
    .set("Content-type", "application/json");

    return new Promise((resolve, reject) => {
      this.http.post(url, JSON.stringify(data),{ headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  get(url,data) {
    const headers = new HttpHeaders()
    .set("Content-type", "application/json");

    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getModelsBrand() {
    return new Promise((resolve, reject) => {
      this.http.get('../../assets/vehicle_master.json')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}