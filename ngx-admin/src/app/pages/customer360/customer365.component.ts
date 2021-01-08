import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'customer',
    templateUrl: './customer365.component.html',
})
export class Customer {
    items$: Observable<any[]>;

    constructor(private _db: AngularFireDatabase) {
        this.items$ = this._db.list('items').valueChanges();
        this.items$.subscribe(value => {
            console.log("value", value);
        })
    }
}