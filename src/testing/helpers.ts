import { Type, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

export function createFixture(component:Type<any>, detectChanges = true): ComponentFixture<any> {
  let fixture = TestBed.createComponent(component);
  if (detectChanges) fixture.detectChanges();
  return fixture;
}

export function queryFor(fixture: ComponentFixture<any>, selector: string): DebugElement[] {
  return fixture.debugElement.queryAll(By.css(selector));
}
