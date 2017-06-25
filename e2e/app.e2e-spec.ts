import { Ng2UtilsPage } from './app.po';

describe('ng2-utils App', () => {
  let page: Ng2UtilsPage;

  beforeEach(() => {
    page = new Ng2UtilsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
