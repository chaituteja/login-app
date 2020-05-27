describe("Login App form test", () => {
    it("Can fill the form and submit - successfull", () => {
        cy.visit("/");
        cy.get(".form");
        cy.get('input[name="email"]').type("eve.holt@reqres.in").should("have.value", "eve.holt@reqres.in");
        cy.get('input[name="password"]').type("password").should("have.value", "password");
        cy.get("button").click();
        cy.contains("Success");
      });
    
      it("Can fill the form and submit - unsuccessfull", () => {
        cy.visit("/");
        cy.get(".form");
        cy.get('input[name="email"]').type("eve.holt@test.in").should("have.value", "eve.holt@test.in");
        cy.get('input[name="password"]').type("password").should("have.value", "password");
        cy.get("button").click();
        cy.get(".form__error").contains("Please provide correct email");
      });
      
      it("Submit form with empty fields", () => {
        cy.visit("/");
        cy.get(".form");
        cy.get('input[name="email"]').type("eve.holt@test.in").should("have.value", "eve.holt@test.in");
        cy.get("button").click();
        cy.get(".form__error").contains("Please fill both fields");
      });
      
      it("clicking reset password link should take to register page and fill form", () => {
        cy.visit("/");
        cy.get(".form__link").click();
        cy.get(".form__heading").contains("New Password");
        cy.get('input[name="email"]').type("eve.holt@reqres.in").should("have.value", "eve.holt@reqres.in");
        cy.get('input[name="newPassword"]').type("password").should("have.value", "password");
        cy.get('input[name="confirmNewPassword"]').type("password").should("have.value", "password");
        cy.get("button").click();
        cy.contains("Password reset success");
        cy.get(".header__logo").click();
        cy.get(".form__heading").contains("Sign In");
      });
      
      it("Can fill the register form and submit - unsuccessfull", () => {
        cy.visit("/");
        cy.get(".form__link").click();
        cy.get('input[name="email"]').type("eve.holt@test.in").should("have.value", "eve.holt@test.in");
        cy.get('input[name="newPassword"]').type("password").should("have.value", "password");
        cy.get("button").click();
        cy.get(".form__error").contains("Please fill all fields and match passwords");
        cy.get('input[name="confirmNewPassword"]').type("password").should("have.value", "password");
        cy.get("button").click();
        cy.get(".form__error").contains("Please provide correct email");
      });
  });