import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { SportifAll, SportifDetail } from '../model/sportif.model';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SportifsService {
  readonly urlGymnases = 'http://localhost:8080/sportifs';

  constructor(private http:HttpClient) { }

  getAllSportifs() : Observable<SportifAll> {
    console.log('Call getGymnases');
    const url = `${this.urlGymnases}`;
    return this.http.get<SportifAll>(url);
} 

}
