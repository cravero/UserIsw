import { RegPedidoPage } from './app.po';

describe('reg-pedido App', () => {
  let page: RegPedidoPage;

  beforeEach(() => {
    page = new RegPedidoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
