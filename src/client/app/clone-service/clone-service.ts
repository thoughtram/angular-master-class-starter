import {Injectable} from 'angular2/core';

@Injectable()
export class CloneService<T> {
  originalItem: T;
  currentItem: T;

  createClone (item: T) {
    this.originalItem = item;
    this.currentItem = this.clone(item);
    return this.currentItem;
  }

  getItem () :T {
    return this.currentItem;
  }

  abortChanges () :T {
    Object.assign(this.currentItem, this.originalItem);
    return this.originalItem;
  }

  commitChanges () {
    Object.assign(this.originalItem, this.currentItem);
  }

  clone (item: T) :T {
    // super poor clone implementation
    return JSON.parse(JSON.stringify(item));
  }
}
