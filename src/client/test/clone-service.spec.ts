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
// import {CloneService} from './clone-service';
//
// interface Person {
//   name: string;
// }
//
// describe('CloneService Service', () => {
//
//   beforeEachProviders(() => [CloneService]);
//
//   let original = <Person>{name: 'Pascal'};
//
//   it('should create clones', inject([CloneService], (cloneService:CloneService<Person>) => {
//     let clone = cloneService.createClone(original);
//     expect(clone).not.toBe(original);
//   }));
//
//   it('should return clone', inject([CloneService], (cloneService:CloneService<Person>) => {
//     let clone = cloneService.createClone(original);
//     expect(clone).toBe(cloneService.getItem());
//   }));
//
//   it('should return original item when aborting changes', inject([CloneService], (cloneService:CloneService<Person>) => {
//     let clone = cloneService.createClone(original);
//     clone.name = 'Christoph';
//
//     expect(clone).toBe(cloneService.getItem());
//     cloneService.abortChanges();
//     expect(clone).toEqual(original);
//   }));
//
//   it('should commit changes to original item', inject([CloneService], (cloneService:CloneService<Person>) => {
//     let clone = cloneService.createClone(original);
//     clone.name = 'Christoph';
//
//     cloneService.commitChanges();
//     expect(original).toEqual(clone);
//   }));
// });
