import { Component } from '@angular/core';
import { NotifierService } from './notifier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private notifierService: NotifierService){}

  title = 'observer-pattern';

  timestamps = []
  timestamp_subscription; 

  startWatching = function(){
    this.timestamp_subscription = this.notifierService.notifier.subscribe(timestamp => this.timestamps.push(timestamp))
  }

  stopWatching = function(){
    this.timestamp_subscription.unsubscribe();
    //clear the timestamps so they aren't if we start again
    this.timestamps = [];
  }
}
