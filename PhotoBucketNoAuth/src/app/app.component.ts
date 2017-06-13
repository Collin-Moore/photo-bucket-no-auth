import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import * as firebase from 'firebase/app';

interface PhotoObject {
  url: string;
  name: string;
  $key?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Moore Photos';

  formPhoto: PhotoObject = {
    'url': '',
    'name': ''
  };

  readonly photosPath = 'photos';

  photoStream: FirebaseListObservable<PhotoObject[]>;

  constructor(db: AngularFireDatabase) {
    this.photoStream = db.list(this.photosPath);
  }

  onSubmit(): void {
    try {
      if (this.formPhoto.$key) {
        this.photoStream.update(this.formPhoto.$key, this.formPhoto);
      } else {
        this.photoStream.push(this.formPhoto);
      }

      this.formPhoto = {
        'url': '',
        'name': ''
      }

    } catch (e) {
      console.log('Form error:', e);
    }
  }

  edit(photo: PhotoObject): void {
    this.formPhoto = photo;
  }

  remove(photoKey: string): void {
    this.photoStream.remove(photoKey);
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
