import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  isLogin: BehaviorSubject<boolean>;
  loginFlag: BehaviorSubject<string>;

  private behave = new BehaviorSubject<Object>({textVal: 'Hello'});

  constructor() { 
    this.isLogin = new BehaviorSubject(false);
    this.loginFlag = new BehaviorSubject('');
  }

  setBehaviorView(behave: Object) { 
    this.behave.next(behave); 
  } 
  getBehaviorView(): Observable<any> { 
      return this.behave.asObservable(); 
  }

}
