import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comments } from './comments';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  searchComment(id: number): Observable<Comments> {
    return this.http.get<Comments>(`${API}/photos/${id}/comments`);
  }

  addComments(id: number, commentText: string): Observable<Comment> {
    return this.http.post<Comment>(`${API}/photos/${id}/comments`, {
      commentText,
    });
  }
}
