import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GymnasesAll, GymnaseDetail, Seances } from '../model/gymnases.model';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class GymnasessService {

  readonly urlGymnases = 'http://localhost:8080/gymnases';

  constructor(private httpService: HttpClient) { }

  getGymnases(): Observable<GymnasesAll> {
    console.log('Call getGymnases');
    const url = `${this.urlGymnases}`;
    return this.httpService.get<GymnasesAll>(url);
  }

  getGymnaseById(id: string): Observable<GymnaseDetail> {
    console.log('Call getGymnase');
    const url = `${this.urlGymnases}/id/${id}`;
    return this.httpService.get<GymnaseDetail>(url);
  }

  getNamesGymnases(): Observable<String> {
    console.log('Call getNamesGymnase');
    const url = `${this.urlGymnases}/noms`;
    return this.httpService.get<String>(url);
  }

  getGymnaseByName(nom: string): Observable<GymnaseDetail> {
    console.log('Call getGymnaseByName');
    const url = `${this.urlGymnases}/nom/${nom}`;
    return this.httpService.get<GymnaseDetail>(url);
  }

  getGymnaseWithSurface(min: number, max: number): Observable<GymnaseDetail> {
    console.log('Call getGymnaseWithSurface');
    const url = `${this.urlGymnases}/surface-min-max` + min + max;
    return this.httpService.get<GymnaseDetail>(url);
  }

  getAllGymnaseSurface(): Observable <number> {
    console.log('Call getAllGymnaseSurface');
    const url = `${this.urlGymnases}/surface`;
    return this.httpService.get<number>(url);
  }

  getSeancesById(id: number): Observable <Seances> {
    console.log('Call getSeancesById');
    const url = `${this.urlGymnases}/seances/${id}`;
    return this.httpService.get<Seances>(url);
  }

  getSeancesEntrainerById(id: number): Observable <Seances> {
    console.log('Call getSeancesEntrainerById');
    const url = `${this.urlGymnases}/seances-entraineur/${id}`;
    return this.httpService.get<Seances>(url);
  }

}
