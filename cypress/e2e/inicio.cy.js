describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  });

  it('Deve renderizar corretamente o texto da seção de vantagens', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h2').contains('Vantagens do nosso banco')
  });
})