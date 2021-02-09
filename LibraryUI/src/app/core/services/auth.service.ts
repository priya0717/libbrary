import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/delay';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient, @Inject('LOCALSTORAGE') private localStorage: Storage) { }

  login(email: string, password: string) {
    return this.http.post(environment.ApiUrl+"/login", { email, password })
      .pipe(
        map((response:any) => {
          // store email and jwt token in local storage to keep user logged in
          // between page refreshes
          response['expiration']= moment(response.token.accessToken.created_at).add(response['expiredafter'], 'minutes').toDate(),
          this.localStorage.setItem(
            'currentUser',
            JSON.stringify(response)
          );

          return true;
        })
      ).pipe(
        catchError(this.handleError<object[]>('login', []))
      );
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.localStorage.removeItem('currentUser');
  }

  getCurrentUser(): any {
    // TODO: Enable after implementation
    return JSON.parse(this.localStorage.getItem('currentUser'));
  }

  passwordResetRequest(email: string) {
    return of(true).delay(1000);
  }

  changePassword(email: string, currentPwd: string, newPwd: string) {
    return of(true).delay(1000);
  }

  passwordReset(email: string, token: string, password: string, confirmPassword: string): any {
    return of(true).delay(1000);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
