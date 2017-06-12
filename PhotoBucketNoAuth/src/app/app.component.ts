import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Moore Photos';

  constructor(db: AngularFireDatabase) {

  }

  ngOnInit(): void {
    firebase.database().ref().child('title').on('value', (snapshot: firebase.database.DataSnapshot) => {
      this.pageTitle = snapshot.val();
    })
  }

  ngOnDestroy(): void {
    firebase.database().ref().child('title').off();
  }
}
