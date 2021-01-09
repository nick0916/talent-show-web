import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
    selector: 'customer',
    templateUrl: './customer365.component.html',
})
export class Customer {
    items$: Observable<any[]>;
    statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];

    constructor(private _db: AngularFireDatabase) {
        this.items$ = this._db.list('items').valueChanges();
        this.items$.subscribe(value => {
            console.log("value", value);
        })
    }
}