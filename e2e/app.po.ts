export class ContactsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('contacts-app h1')).getText();
  }
}
