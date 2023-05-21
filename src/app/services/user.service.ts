import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const baseUrl = 'http://localhost:8000/api/users/'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl)
  }

  get(id: number): Observable <User> {
    return this.http.get<User>(`${baseUrl}/${id}`)
  }

  create(user: User): Observable<User>{
    return this.http.post<User>(baseUrl,user)
  }
}
