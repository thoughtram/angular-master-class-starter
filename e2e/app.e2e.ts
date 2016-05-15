import { ContactsPage } from './app.po';

describe('contacts App', function() {
  let page: ContactsPage;

  beforeEach(() => {
    page = new ContactsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('contacts works!');
  });
});
