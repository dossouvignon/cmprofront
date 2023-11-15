import { Injectable } from '@angular/core';
import { Contact } from './Contact';
import { JwtAuthenticationResponse } from './JwtAuthenticationResponse';
import { SigninRequest } from './SigninRequest';
import { SignUpRequest } from './SignUpRequest ';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TokenService } from './token.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Page } from './page';


@Injectable({
  providedIn: 'root'
})
export class CmproService {

 private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private contactUrlBackendAPI = 'http://localhost:8080';  // URL to web api

  constructor(private http: HttpClient, private tokenService : TokenService) { }

  public signup(request : SignUpRequest ) : Observable<JwtAuthenticationResponse> {
    return this.http.post<JwtAuthenticationResponse>(this.contactUrlBackendAPI + "/api/auth/signup",request, this.httpOptions);
}


public signin(request : SigninRequest ) : Observable<JwtAuthenticationResponse>  {
    return this.http.post<JwtAuthenticationResponse>(this.contactUrlBackendAPI + "/api/auth/signin",request, this.httpOptions);
}

public create(contact : Contact) :  Observable<Contact>{
  this.httpOptions.headers.set("Authorization", "Bearer" + this.tokenService.getData("token"));
  return this.http.post<Contact>(this.contactUrlBackendAPI + "/api/v1/contactcreate",contact, this.httpOptions);
}



public list() :  Observable<Contact[]>{

  //Ajout du token dans le header de la requet
  this.httpOptions.headers.set("Authorization", "Bearer" + this.tokenService.getData("token"));

  return this.http.get<Contact[]>(this.contactUrlBackendAPI + "/api/v1/contactlist", this.httpOptions)
  .pipe(
    tap(_ => console.log("liste des contacts")),
    catchError(this.handleError<Contact[]>('list()', []))
  );
}

public getPage(page: number, pageSize: number): Observable<Page<Contact>> {
  let params = new HttpParams();
  params = params.append('pageNumber', String(page));
  params = params.append('pageSize', String(pageSize));
  return this.http.get<Page<Contact>>(this.contactUrlBackendAPI + "/api/v1/pageload", { params });
}


public getOne(id : number) :  Observable<Contact>{
  //Ajout du token dans le header de la requet
  this.httpOptions.headers.set("Authorization", "Bearer" + this.tokenService.getData("token"));
  return this.http.get<Contact>(this.contactUrlBackendAPI + "/api/v1/contactread/" + id, this.httpOptions);
}


public getNom(nom : string) :  Observable<Contact>{

  //Ajout du token dans le header de la requet
  this.httpOptions.headers.set("Authorization", "Bearer" + this.tokenService.getData("token"));
  return this.http.get<Contact>(this.contactUrlBackendAPI + "/api/v1/contactreadNom" + nom, this.httpOptions);
}

public update(id : number, contact : Contact) :  Observable<Contact>{
  //Ajout du token dans le header de la requet
  
  this.httpOptions.headers.set("Authorization", "Bearer" + this.tokenService.getData("token"));
  return this.http.put<Contact>(this.contactUrlBackendAPI + "/api/v1/contactupdate/" + id, contact, this.httpOptions);
}

/*public update(id : number, contact : Contact) :  Observable<Contact>{
  //Ajout du token dans le header de la requet
  this.httpOptions.headers.set("Authorization", "Bearer" + this.tokenService.getData("token"));
  return this.http.put<Contact>(this.contactUrlBackendAPI + "/api/v1/contactupdate" + id, this.httpOptions);
}*/


public delete( id : number){
  
  //Ajout du token dans le header de la requet
  this.httpOptions.headers.set("Authorization", "Bearer" + this.tokenService.getData("token"));
  return this.http.delete(this.contactUrlBackendAPI + "/api/v1/contactremove/" + id, this.httpOptions);
    
}


/*public loadPage( page : number, size : number) : Observable<string>{
  
  //Ajout du token dans le header de la requet
  this.httpOptions.headers.set("Authorization", "Bearer" + this.tokenService.getData("token"));
  return this.http.get<string>(this.contactUrlBackendAPI + "/api/v1/pageload" + page + size, this.httpOptions);
    
}*/




/**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
