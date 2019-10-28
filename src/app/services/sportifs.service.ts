import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SportifAll, SportifDetail, Sport } from '../model/sportif.model';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SportifsService {
  readonly urlSportifs = 'http://localhost:8080/sportifs';

  constructor(private http:HttpClient) { }

  getAllSportifs() : Observable<SportifAll> {
    console.log('Call getSportifs');
    const url = `${this.urlSportifs}`;
    return this.http.get<SportifAll>(url);
}

  getSportifByName() : Observable<SportifAll> {
    console.log('Call getSportifByName')
    const url = `${this.urlSportifs}/nom`;
    return this.http.get<SportifAll>(url);
  }

  getNomSportifById(_id: string) : Observable<SportifAll> {
    console.log('Call getNomSportifById')
    const url = `${this.urlSportifs}/noms/${_id}`;
    return this.http.get<SportifAll>(url);
  }

  getJouerBySportif(_id: string) : Observable<SportifAll> {
    console.log('Call getJouerBySportif')
    const url = `${this.urlSportifs}/${_id}`;
    return this.http.get<SportifAll>(url);
  }

  getArbitrerBySportif(_id: string) : Observable<SportifAll> {
    console.log('Call getArbitrerBySportif')
    const url = `${this.urlSportifs}/arbitrer/${_id}`;
    return this.http.get<SportifAll>(url);
  }

  getEntraineurBySportif(_id: string) : Observable<SportifAll> {
    console.log('Call getEntraineurBySportif')
    const url = `${this.urlSportifs}/entrainer/${_id}`;
    return this.http.get<SportifAll>(url);
  }

  getSportifBySport(sport: Sport) : Observable<SportifAll> {
    console.log('Call getSportifBySport')
    const url = `${this.urlSportifs}/sportifs-by-sport/${sport}`;
    return this.http.get<SportifAll>(url);
  }
}
