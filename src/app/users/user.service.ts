import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserResponse } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	private url = "http://private-92a969-processoseletivo1.apiary-mock.com/customers";

  	constructor(private http: HttpClient) { }

  	getUsers() {
  		return this.http.get<User[]>(this.url);
  	}

  	updateUser(id: string, user: User): Observable<UserResponse>{
  		const _url = `${this.url}/${id}`;
  		return this.http.put<UserResponse>(_url, user);
  	}
}