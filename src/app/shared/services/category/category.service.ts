import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  aflCategories: AngularFireList<any> | undefined;
  constructor(private db: AngularFireDatabase) { }

  getCategories() {
    this.aflCategories = this.db.list('/categories',
      category => category.orderByChild('name'));
    return this.aflCategories
      .snapshotChanges()
      .pipe(map(changes => changes
        .map(c =>  ({ key: c.payload.key, ...c.payload.val() }))));
  }
}
