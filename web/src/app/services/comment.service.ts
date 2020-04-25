import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient) {
  }

  public all() {
    return this.http.get(environment.apiUrl + '/comments');
  }

  public get(id) {
    return this.http.get(environment.apiUrl + '/comments/' + id);
  }

  public post(data) {
    return this.http.post(environment.apiUrl + '/comments', data);
  }

  public put(id, data) {
    return this.http.put(environment.apiUrl + '/comments/' + id, data);
  }

  public delete(id) {
    return this.http.delete(environment.apiUrl + '/comments/' + id);
  }
}
