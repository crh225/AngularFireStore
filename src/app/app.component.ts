import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

export interface Item { 
  name: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _db:AngularFirestore;
  item: Observable<Item>;
  private itemDoc: AngularFirestoreDocument<Item>;

  constructor(public afAuth: AngularFireAuth, db: AngularFirestore) {
    this.afAuth.auth.signInAnonymously();
    this._db = db;  

    this.itemDoc = this._db.doc<Item>('items/1');
    this.item = this.itemDoc.valueChanges();
  }

  update(sName: string) {
    let tmp: Item = { name: sName };
    this.itemDoc.update(tmp);
  }
}
