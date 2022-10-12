import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from
  '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Apiservices2Service {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
  // Se establece la base url del API a consumir
  apiURL = 'https://my-json-server.typicode.com/victorrosendo/repoUsuariosRamos';
  // Se declara la variable http de tipo HttpClient
  constructor(private http: HttpClient) { }

  getAutos(): Observable<any> {
    return this.http.get(this.apiURL + '/autos/').pipe(
      retry(3)
    );
  }

  createPost(post): Observable<any> {
    return this.http.post(this.apiURL + '/autos', post, this.httpOptions)
      .pipe(
        retry(3)
      );
  }

  updateAutos(id, post): Observable<any> {
    return this.http.put(this.apiURL + '/autos/' + id, post, this.httpOptions).
      pipe(retry(3));
  }


  deleteAutos(id):Observable<any>{
    return this.http.delete(this.apiURL+'/autos/'+id,this.httpOptions);
    }


  getUsers(): Observable<any> {
    return this.http.get(this.apiURL + '/users/').pipe(
      retry(3)
    );
  }

  getUser(id): Observable<any> {
    return this.http.get(this.apiURL + '/users/' + id).pipe(
      retry(3)
    );
  }
}
