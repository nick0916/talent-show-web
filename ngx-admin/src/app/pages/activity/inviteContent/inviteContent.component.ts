import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'inviteContent',
    templateUrl: './inviteContent.component.html',
})
export class InviteContentComponent {
    items$: Observable<any[]>;

    constructor(private _db: AngularFireDatabase) {
        this.items$ = this._db.list('items').valueChanges();
        this.items$.subscribe(value => {
            console.log("value", value);
        })
    }
}