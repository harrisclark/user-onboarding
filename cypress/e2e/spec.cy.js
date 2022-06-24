describe('empty spec', () => {
  // it('passes', () => {
  //   cy.visit('http://localhost:3000')
  // });

  beforeEach(() => {
    cy.visit("http://localhost:3000")
  });

  const nameInput = () => cy.get("input[name=username]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const tosCheckbox = () => cy.get("input[name=tos]");
  const submitBtn = () => cy.get("button");


  it("can type in text inputs", () => {
    nameInput()
      .should("have.value", "")
      .type("kitty")
      .should("have.value", "kitty");

    emailInput()
      .should("have.value", "")
      .type("kitty@cat.com")
      .should("have.value", "kitty@cat.com");

    passwordInput()
      .should("have.value", "")
      .type("foR$12lk")
      .should("have.value", "foR$12lk");
  });

  it("can checked terms of service box", () => {
    tosCheckbox()
      .should("not.be.checked")
      .click()
      .should("be.checked");
  });

  it("can submit form", () => {
    submitBtn()
      .should("be.disabled");
      
  });

})