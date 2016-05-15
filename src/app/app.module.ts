import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactsAppComponent } from './contacts.component';

@NgModule({
  declarations: [ContactsAppComponent],
  imports: [BrowserModule],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
