describe('Página Inicial', () => {
  it('Deve renderizar o h1 com o texto correto', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-test="titulo-principal"]').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  });

  it('Deve renderizar corretamente o texto da seção de vantagens', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h2').contains('Vantagens do nosso banco')
  });
})