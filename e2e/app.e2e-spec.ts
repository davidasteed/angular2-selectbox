import { Angular2SelectboxPage } from './app.po';

describe('angular2-selectbox App', function() {
  let page: Angular2SelectboxPage;

  beforeEach(() => {
    page = new Angular2SelectboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
