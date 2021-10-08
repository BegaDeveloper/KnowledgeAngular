import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class HttpSService {
  constructor(private http: HttpClient) {}

  //GET
  getPost(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/posts');
  }

  //POST
  postReq(): Observable<Post[]> {
    return this.http.post<Post[]>(
      'https://jsonplaceholder.typicode.com/posts',
      {
        userId: 1,
        id: 1,
        title: 'Hello This is my post',
        body: 'Hello this is my post',
      }
    );
  }

  //DELETE
  deletePost() {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1');
  }
}
