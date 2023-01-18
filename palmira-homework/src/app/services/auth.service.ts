import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { LogInService } from './log-in.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this._isLoggedIn$.asObservable();
  get token(){
    return localStorage.getItem('accessToken_auth');
  }
  constructor(
    private logInService:LogInService
    ) {
      if(this.token){
        this._isLoggedIn$.next(true);
      }else{
        this._isLoggedIn$.next(false);
      }
    }

  isLoggedIn(){
    return this.isLoggedIn$.pipe(map(res=>res));
  }

  logIn(form:any){
    return this.logInService.signIn(form).pipe(
      tap((res: any) => {
        if(res.data.accessToken){
          this._isLoggedIn$.next(true);
          localStorage.setItem('accessToken_auth', res.data.accessToken);
        }else{
          this._isLoggedIn$.next(false);
          localStorage.setItem('accessToken_auth', '');
        }
      })
    );
  }
}
