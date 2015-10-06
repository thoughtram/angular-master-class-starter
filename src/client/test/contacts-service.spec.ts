// import {
//   it,
//   iit,
//   describe,
//   ddescribe,
//   expect,
//   inject,
//   injectAsync,
//   TestComponentBuilder,
//   beforeEachProviders
// } from 'angular2/testing';
// import {provide} from 'angular2/core';
// import {CONTACT_DATA} from '../data/contact-data';
// import {ContactsService} from './contacts-service';
//
// describe('Exercise 5', () => {
//
//   beforeEachProviders(() => [ContactsService]);
//
//   it('should exist', inject([ContactsService], (contactsService:ContactsService) => {
//     expect(contactsService).toBeDefined();
//   }));
//
//   it('should return an array of contacts', inject([ContactsService], (contactsService:ContactsService) => {
//     let contacts = contactsService.getContacts();
//
//     expect(contacts).toEqual(CONTACT_DATA);
//   }));
// });
//
