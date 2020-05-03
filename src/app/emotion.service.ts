import { Injectable } from '@angular/core';
import { Emotion } from './models/emotion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmotionService {

  private emotionUrl = 'http://localhost:3000/';


  getEmotions(): Observable<Emotion[]> {
    return this.http.get<Emotion[]>(this.emotionUrl + 'emotion')
  }


  constructor(
    private http: HttpClient ) { }


}
