import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';
import { Mahasiswa } from '../models/mahasiswa';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class MahasiswaService {

  // API path
  base_path = 'http://localhost/rest-api/api';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
   })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  // ambil data mahasiswa
  ambilData(): Observable<Mahasiswa> {
    return this.http
      .get<Mahasiswa>(this.base_path + '/siswa')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // mengambil data detail mahasiswa sesuai nim
  detailMahasiswa(nim): Observable<Mahasiswa> {
    return this.http
      .get<Mahasiswa>(this.base_path + '/siswa?nim=' + nim)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  tambahMahasiswa(item): Observable<Mahasiswa> {
    return this.http
      .post<Mahasiswa>(this.base_path + '/siswa/index_post/', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // edit data sesuai nim
  editData(nim, item): Observable<Mahasiswa> {
    return this.http
      .put<Mahasiswa>(this.base_path + '/siswa/index_put/' + nim, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // hapus data sesuai nim
  hapusData(nim) {
    console.log(nim);
    return this.http
      .delete<Mahasiswa>(this.base_path + '/siswa/hapus/' + nim, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  login(item): Observable<Login> {
    return this.http
      .post<Login>(this.base_path + '/auth/login', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
