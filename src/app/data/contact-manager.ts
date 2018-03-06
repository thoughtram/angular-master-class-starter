import { Contact} from '../models/contact';

export class ContactManager {

  private _contacts: Array<Contact> = [];

  get contacts() {
    return [...this._contacts];
  }

  constructor(data: Array<Contact>) {
    this._contacts = [...data];
  }

  add(contact: Contact) {
    this._contacts.push(contact);
  }

  update(contact: Contact) {
    let index = this._contacts.findIndex(c => c.id == contact.id);
    if (index === -1) {
      throw new Error(`Trying to update contact that doesn't exist with ID: ${contact.id}!`);
    }
    this._contacts[index] = contact;
  }

  get(id: number) {
    let contact = this.contacts.find(c => c.id === id);
    return contact ? contact : null;
  }

  getAll() {
    return this.contacts;
  }
}

