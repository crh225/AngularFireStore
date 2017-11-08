import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

export interface Shirt { name: string; price: number; }
export interface ShirtId extends Shirt { id: string; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _db:AngularFirestore;
  shirts:  Observable<any[]>;

  constructor(public afAuth: AngularFireAuth, db: AngularFirestore) {
    this.afAuth.auth.signInAnonymously();
    this.shirts = db.collection('tshirts').valueChanges();
    this._db = db;  
  }

  addTshirt(sName: string, dPrice: number){
    let shirtsCollection = this._db.collection<Shirt>('tshirts');
    shirtsCollection.add({ name: sName, price: dPrice });
  }


}
