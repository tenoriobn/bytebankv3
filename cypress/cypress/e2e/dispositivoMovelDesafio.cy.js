describe('Menu de navegação burguer icon', () => {
  context('Resolução do iphone xr', () => {
    beforeEach(() => {
      cy.viewport('iphone-xr');
    });

    it('Deve existir um botão menu burguer', () => {
      cy.visit('/');

      cy.getByData('botao-login').click();
      cy.getByData('email-input').type('neilton@alura.com');
      cy.getByData('senha-input').type('123456');
      cy.getByData('botao-enviar').click();

      cy.location('pathname').should('eq', '/home');

      cy.getByData('menu-burguer').should('be.visible');
    });
  });

  context('Resolução do mackbook 13 ', () => {
    beforeEach(() => {
      cy.viewport('macbook-13');
    });

    it('Não deve existir um botão menu burguer', () => {
      cy.visit('/');

      cy.getByData('botao-login').click();
      cy.getByData('email-input').type('neilton@alura.com');
      cy.getByData('senha-input').type('123456');
      cy.getByData('botao-enviar').click();

      cy.location('pathname').should('eq', '/home');

      cy.getByData('menu-burguer').should('not.be.visible');
    });
  });
});