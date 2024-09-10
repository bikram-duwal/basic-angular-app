import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomAPIService {
private url:string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(public http:HttpClient) { }

  public getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.url);
  }
}

export interface Post{
  userId: number;
  id: number;
  title: string;
  body: string;
}
