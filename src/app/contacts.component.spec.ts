import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ContactsAppComponent } from '../app/contacts.component';

beforeEachProviders(() => [ContactsAppComponent]);

describe('App: Contacts', () => {
  it('should create the app',
      inject([ContactsAppComponent], (app: ContactsAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
