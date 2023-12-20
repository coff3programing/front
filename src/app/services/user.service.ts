// login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/auth';
  private token: string = '';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  getAuthenticatedData(): Observable<any> {
    const headers = { Authorization: `Bearer ${this.getToken()}` };
    return this.http.get(`${this.apiUrl}/data`, { headers });
  }

  sendResetEmail(email: string): Observable<any> {
    const resetUrl = `${this.apiUrl}/send-reset-email`;
    return this.http.post(resetUrl, { email });
  }

  resetPassword(token: string, newPassword: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/reset-password`, { token, newPassword });
  }

  
// metodos para users

  private apiUrl1 = 'http://localhost:3000/api/users';
  createUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl1, user);
  }

  getUser(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl1);
  }

  
  deleteUser(userId: number): Observable<any> {
    const deleteUrl = `${this.apiUrl1}/${userId}`;
    return this.http.delete<any>(deleteUrl);
  }
  

}
