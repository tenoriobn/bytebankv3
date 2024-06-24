describe('Página Inicial', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Deve renderizar o h1 com o texto correto', () => {
    cy.getByText('titulo-principal', 'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!');
  });

  it('Deve renderizar corretamente o texto da seção de vantagens', () => {
    cy.getByText('titulo-vantagens', 'Vantagens do nosso banco');
  });
})