import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { GymnasesAll, GymnaseDetail } from '../model/gymnases.model';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class GymnasessService {

  readonly urlGymnases = 'http://http://localhost:8080/sportifs';

  constructor(private httpService: HttpClient) { }

  getGymnases(): Observable<GymnasesAll> {
    console.log('Call getGymnases');
    const url = `${this.urlGymnases}`;
    return this.httpService.get<GymnasesAll>(url);
  }

  getGymnase(_id: string): Observable<GymnaseDetail> {
    console.log('Call getGymnase');
    const url = `${this.urlGymnases}/${_id}`;
    return this.httpService.get<GymnaseDetail>(url);
  }
}
