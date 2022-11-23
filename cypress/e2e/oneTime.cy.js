describe('Solo una ejecucion', () => {
    it('Recuperar cuenta con datos validos', () => {
        cy.visit('http://localhost:3000/login');
        cy.url().should('include', '/login');

        // buscar contenido
        cy.contains('Correo electrónico');
        cy.contains('Contraseña');
        cy.contains('Iniciar sesion');
        cy.contains('Olvidé mi contraseña');
        cy.contains('Registrarse');

        cy.get('#email') // sleccionar el elemento
            .type('ge19008@ues.edu.sv') // escribir en el elemento
            .should('have.value', 'ge19008@ues.edu.sv'); // verificar que el elemento tenga el valor escrito

        // Hacer click en el enlace "type"
        cy.get('#recovery').click();

        // Saber si la url es la correcta
        cy.url().should('include', '/send-email');
    });
    it('Crear cuenta valida', () => {
        cy.visit('http://localhost:3000/create-account');
        cy.url().should('include', '/create-account');

        // buscar contenido
        cy.contains('Nombre');
        cy.contains('Direccion de correo');
        cy.contains('Contraseña');

        cy.get('#name') // sleccionar el elemento
            .type('Mauricio') // escribir en el elemento
            .should('have.value', 'Mauricio'); // verificar que el elemento tenga el valor escrito
        cy.get('#email') // sleccionar el elemento
            .type('Mauricio@gmail.com') // escribir en el elemento
            .should('have.value', 'Mauricio@gmail.com'); // verificar que el elemento tenga el valor escrito
        cy.get('#password') // sleccionar el elemento
            .type('12345678') // escribir en el elemento
            .should('have.value', '12345678'); // verificar que el elemento tenga el valor escrito

        // Hacer click en el enlace "type"
        cy.get('#signup-button').click();

        // Saber si la url es la correcta
        cy.contains('Tu cuenta ha sido creada con éxito');
        cy.get('.swal2-confirm').click();
        cy.url().should('include', '/');
    });
});