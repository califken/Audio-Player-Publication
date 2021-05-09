import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import firebase from 'firebase';

@Injectable()
export class DataService {
  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  size$: BehaviorSubject<string | null>;

  constructor(db: AngularFireDatabase) {
    console.clear();
    console.log('hello');
    this.size$ = new BehaviorSubject(null);
    this.items$ = this.size$.pipe(
      switchMap(size =>
        db
          .list('/audio', ref =>
            size ? ref.orderByChild('size').equalTo(size) : ref
          )
          .snapshotChanges()
      )
    );
    this.filterBy('small');
  }
  filterBy(size: string | null) {
    this.size$.next(size);
  }
}
