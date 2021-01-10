import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'activity',
    styleUrls: ['./activity.component.scss'],
    templateUrl: './activity.component.html',
})
export class ActivityComponent {
    items$: Observable<any[]>;

    constructor(
        private _db: AngularFireDatabase,
        private fb: FormBuilder
        ) {
        this.items$ = this._db.list('items').valueChanges();
        this.items$.subscribe(value => {
            console.log("value", value);
        })
    }

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;

  ngOnInit() {
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }
}