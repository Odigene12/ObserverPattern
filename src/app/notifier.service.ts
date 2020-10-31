import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor() {
    this.startTimer();
  }

  private _notifier = new BehaviorSubject<string>(new Date().toLocaleString());
  notifier = this._notifier.asObservable();

  startTimer = function () {
    setInterval(() => {
      // the callback (which is sending the notification to the observable)
      let newTimestamp = new Date().toLocaleString();
      this._notifier.next(newTimestamp)
      //console.log(newTimestamp)
    },
      // how often in milliseconds to delay
      1000
    )
  }
}
