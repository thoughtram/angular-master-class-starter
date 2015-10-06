// import {
//   describe,
//   it,
//   iit,
//   expect,
//   beforeEachProviders,
//   inject,
//   injectAsync,
//   TestComponentBuilder,
//   ComponentFixture
// } from 'angular2/testing';
// import {reflector, ComponentMetadata, provide} from 'angular2/core';
// import {ContactsApp} from '../app/contacts-app';
// import {ContactHeaderComponent} from '../app/contact-header/contact-header';
// // import {ContactsService} from '../app/services/contacts-service/contacts-service';
//
// // describe('Exercise 1', () => {
//
// //   it('should run', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
// //     return tcb.createAsync(ContactsApp).then((componentFixture: ComponentFixture) => {
// //       const element = componentFixture.nativeElement;
// //       expect(element.querySelector('h1').innerHTML).toEqual('Hello World!');
// //     });
// //   }));
// // });
//
// describe('Exercise 2', () => {
//
//   it('should have ContactHeaderComponent directive dependency', () => {
//     let metadatas = reflector.annotations(ContactsApp);
//     let componentMetadata = metadatas.find(type => type instanceof ComponentMetadata);
//     expect(componentMetadata.directives).toBeDefined();
//     expect(componentMetadata.directives.indexOf(ContactHeaderComponent) > -1).toBe(true);
//   });
// });
//
// // describe('Exercise 3', () => {
//
// //   it('should have a contact property', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
// //     return tcb.createAsync(ContactsApp).then((componentFixture: ComponentFixture) => {
// //       let contactProp = componentFixture.componentInstance.contact;
// //       expect(contactProp).toBeDefined();
// //       expect(contactProp.id).toEqual(7);
// //       expect(contactProp.name).toEqual('Diana Ellis');
// //     });
// //   }));
// // });
//
// describe('Exercise 4', () => {
//
//   it('should have a list of contacts', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
//     return tcb.createAsync(ContactsApp).then((componentFixture: ComponentFixture) => {
//       let contactsProp = componentFixture.componentInstance.contacts;
//       expect(contactsProp).toBeDefined();
//       let element = componentFixture.nativeElement;
//       componentFixture.detectChanges();
//       expect(element.querySelectorAll('li').length > 1).toBe(true);
//     });
//   }));
// });
//
// // describe('Exercise 5', () => {
//
// //   it('should have ContactsService provider', () => {
// //     let metadatas = reflector.annotations(ContactsApp);
// //     let componentMetadata = metadatas.find(type => type instanceof ComponentMetadata);
// //     expect(componentMetadata.providers).toBeDefined();
// //     expect(componentMetadata.providers.indexOf(ContactsService) > -1).toBe(true);
// //   });
//
// //   it('should use ContactsService to get contacts',  injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
// //     return tcb
// //       .overrideProviders(ContactsApp, [
// //         provide(ContactsService, { useValue: {
// //           getContacts: function () {
// //             return [{name: 'Pascal'}, {name: 'Christoph'}];
// //           }
// //         }})
// //       ])
// //       .createAsync(ContactsApp).then((componentFixture: ComponentFixture) => {
// //         let element = componentFixture.nativeElement;
// //         componentFixture.detectChanges();
// //         expect(element.querySelectorAll('li').length).toBe(2);
// //       });
// //   }));
// // });
//
