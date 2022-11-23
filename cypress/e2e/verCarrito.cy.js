describe('Sesion activa', () => {
    it('Iniciar sesion con datos validos', () => {
        cy.visit('http://localhost:3000/login');
        cy.url().should('include', '/login');

        // buscar contenido
        cy.contains('Correo electrónico');
        cy.contains('Contraseña');
        cy.contains('Iniciar sesion');
        cy.contains('Olvidé mi contraseña');
        cy.contains('Registrarse');

        cy.get('#email') // sleccionar el elemento
            .type('crissge2016@gmail.com') // escribir en el elemento
            .should('have.value', 'crissge2022@gmail.com'); // verificar que el elemento tenga el valor escrito
        cy.get('#password') // sleccionar el elemento
            .type('123456789') // escribir en el elemento
            .should('have.value', '123456789'); // verificar que el elemento tenga el valor escrito

        // Hacer click en el enlace "type"
        cy.get('#login-button').click();

        // Saber si la url es la correcta
        cy.url().should('include', '/');
    });
    it('Ver carrito', () => {
        setTimeout(function(){
            cy.get('#cart').click();
            cy.contains('Mi orden');
            cy.url().should('include', '/');
        }, 2000);
    });
});