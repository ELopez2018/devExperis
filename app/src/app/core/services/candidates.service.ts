import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '@models/user.model';

import { environment } from '@environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { CandidateModel } from '@models/candidate.model';

@Injectable({
  providedIn: 'root',
})
export class CandidatesService {
  access_token: string = '';
  token = '';
  urlApi: string = environment.API_URL;
  Headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
      // token: this.token
    }),
  };

  public setHttpOption() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
        // token: this.token
      }),
    };
  }

  createCandidate$(candidate: CandidateModel): Observable<CandidateModel> {
    return this.http.post<CandidateModel>(this.urlApi + `/candidates`, candidate).pipe(
      tap((resp) => {
        console.log('response: ', resp);
        return resp;
      })
    );
  }
  readCandidate$(): Observable<CandidateModel[]> {
    return this.http.get<CandidateModel[]>(this.urlApi + `/candidates`).pipe(
      tap((resp) => {
        console.log('response: ', resp);
        return resp;
      })
    );
  }
  updateCandidate$(candidate: CandidateModel): Observable<CandidateModel> {
    return this.http.put<CandidateModel>(this.urlApi + `/candidates`, candidate).pipe(
      tap((resp) => {
        console.log('response: ', resp);
        return resp;
      })
    );
  }
  deleteCandidate$(id: number): Observable<CandidateModel> {
    return this.http.delete<CandidateModel>(this.urlApi + `/candidates/${id}`, ).pipe(
      tap((resp) => {
        console.log('response: ', resp);
        return resp;
      })
    );
  }
  searchCandidateById$(id: number): Observable<CandidateModel> {
    return this.http.get<CandidateModel>(this.urlApi + `/candidates/${id}`, ).pipe(
      tap((resp) => {
        console.log('response: ', resp);
        return resp;
      })
    );
  }
  searchCandidate$(field: string, value: string): Observable<CandidateModel> {
    return this.http.get<CandidateModel>(this.urlApi + `/${field}/${value}/candidates/`, ).pipe(
      tap((resp) => {
        console.log('response: ', resp);
        return resp;
      })
    );
  }
  searchByDateCandidate$(from: Date, to: Date): Observable<CandidateModel> {
    return this.http.get<CandidateModel>(this.urlApi + `/${from}/${to}/candidates/bydate`, ).pipe(
      tap((resp) => {
        console.log('response: ', resp);
        return resp;
      })
    );
  }
}
