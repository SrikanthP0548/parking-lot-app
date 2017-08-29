import { ParkingLotPage } from './app.po';

describe('parking-lot App', () => {
  let page: ParkingLotPage;

  beforeEach(() => {
    page = new ParkingLotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
