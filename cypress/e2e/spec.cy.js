describe('Sin inicio de sesion', () => {
    it('Enviar formulario de contactanos vacio', () => {
        cy.visit('http://localhost:3000/contactUs');
        cy.url().should('include', '/contactUs');

        // buscar contenido
        cy.contains('Contactanos');
        cy.contains('Lalishop S.A. de C.V.');
        cy.contains('+503 7969-2507');
        cy.contains('lalishop_official@gmail.com');
        cy.contains('Nombre');
        cy.contains('Email');
        cy.contains('Mensaje');

        // Hacer click en el enlace "type"
        cy.get('.btn-dark').click();

        // Saber si la url es la correcta
        cy.contains('Debes llenar todos los campos');
        cy.get('.swal2-confirm').click();
        cy.url().should('include', '/contactUs');
    });

    it('Enviar formulario de contactanos con datos', () => {
        cy.visit('http://localhost:3000/contactUs');
        cy.url().should('include', '/contactUs');

        // buscar contenido
        cy.contains('Contactanos');
        cy.contains('Lalishop S.A. de C.V.');
        cy.contains('+503 7969-2507');
        cy.contains('lalishop_official@gmail.com');
        cy.contains('Nombre');
        cy.contains('Email');
        cy.contains('Mensaje');

        cy.get('#name') // sleccionar el elemento
            .type('Alexthian') // escribir en el elemento
            .should('have.value', 'Alexthian'); // verificar que el elemento tenga el valor escrito
        cy.get('#email') // sleccionar el elemento
            .type('prueba@gmail.com') // escribir en el elemento
            .should('have.value', 'prueba@gmail.com'); // verificar que el elemento tenga el valor escrito
        cy.get('#message') // sleccionar el elemento
            .type('Mensaje de prueba') // escribir en el elemento
            .should('have.value', 'Mensaje de prueba'); // verificar que el elemento tenga el valor escrito

        // Hacer click en el enlace "type"
        cy.get('.btn-dark').click();

        // Saber si la url es la correcta
        cy.contains('Mensaje enviado');
        cy.get('.swal2-confirm').click();
        cy.url().should('include', '/');
    });
    it('Iniciar sesion sin datos', () => {
        cy.visit('http://localhost:3000/login');
        cy.url().should('include', '/login');

        // buscar contenido
        cy.contains('Correo electrónico');
        cy.contains('Contraseña');
        cy.contains('Iniciar sesion');
        cy.contains('Olvidé mi contraseña');
        cy.contains('Registrarse');

        // Hacer click en el enlace "type"
        cy.get('#login-button').click();

        // Saber si la url es la correcta
        cy.contains('Debes ingresar tus credenciales');
        cy.get('.swal2-confirm').click();
        cy.url().should('include', '/login');
    });
    it('Iniciar sesion con correo no registrado', () => {
        cy.visit('http://localhost:3000/login');
        cy.url().should('include', '/login');

        // buscar contenido
        cy.contains('Correo electrónico');
        cy.contains('Contraseña');
        cy.contains('Iniciar sesion');
        cy.contains('Olvidé mi contraseña');
        cy.contains('Registrarse');

        cy.get('#email') // sleccionar el elemento
            .type('prueba@gmail.com') // escribir en el elemento
            .should('have.value', 'prueba@gmail.com'); // verificar que el elemento tenga el valor escrito
        cy.get('#password') // sleccionar el elemento
            .type('12345678') // escribir en el elemento
            .should('have.value', '12345678'); // verificar que el elemento tenga el valor escrito

        // Hacer click en el enlace "type"
        cy.get('#login-button').click();

        // Saber si la url es la correcta
        cy.contains('El usuario no existe');
        cy.get('.swal2-confirm').click();
        cy.url().should('include', '/login');
    });
    it('Iniciar sesion con contrasenia invalida', () => {
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
            .should('have.value', 'crissge2016@gmail.com'); // verificar que el elemento tenga el valor escrito
        cy.get('#password') // sleccionar el elemento
            .type('anbjdjdcb') // escribir en el elemento
            .should('have.value', 'anbjdjdcb'); // verificar que el elemento tenga el valor escrito

        // Hacer click en el enlace "type"
        cy.get('#login-button').click();

        // Saber si la url es la correcta
        cy.contains('La contraseña es incorrecta');
        cy.get('.swal2-confirm').click();
        cy.url().should('include', '/login');
    });
    it('Recuperar cuenta sin datos', () => {
        cy.visit('http://localhost:3000/login');
        cy.url().should('include', '/login');

        // buscar contenido
        cy.contains('Correo electrónico');
        cy.contains('Contraseña');
        cy.contains('Iniciar sesion');
        cy.contains('Olvidé mi contraseña');
        cy.contains('Registrarse');

        // Hacer click en el enlace "type"
        cy.get('#recovery').click();

        // Saber si la url es la correcta
        cy.contains('Debes ingresar tu correo electrónico');
        cy.get('.swal2-confirm').click();
        cy.url().should('include', '/login');
    });
    it('Recuperar cuenta con correo invalido', () => {
        cy.visit('http://localhost:3000/login');
        cy.url().should('include', '/login');

        // buscar contenido
        cy.contains('Correo electrónico');
        cy.contains('Contraseña');
        cy.contains('Iniciar sesion');
        cy.contains('Olvidé mi contraseña');
        cy.contains('Registrarse');

        cy.get('#email') // sleccionar el elemento
            .type('falso@gmail.com') // escribir en el elemento
            .should('have.value', 'falso@gmail.com'); // verificar que el elemento tenga el valor escrito

        // Hacer click en el enlace "type"
        cy.get('#recovery').click();

        // Saber si la url es la correcta
        cy.contains('El usuario no existe');
        cy.get('.swal2-confirm').click();
        cy.url().should('include', '/login');
    });
    it('Crear cuenta sin datos', () => {
        cy.visit('http://localhost:3000/create-account');
        cy.url().should('include', '/create-account');

        // buscar contenido
        cy.contains('Nombre');
        cy.contains('Direccion de correo');
        cy.contains('Contraseña');

        // Hacer click en el enlace "type"
        cy.get('#signup-button').click();

        // Saber si la url es la correcta
        cy.contains('Debes llenar todos los campos');
        cy.get('.swal2-confirm').click();
        cy.url().should('include', '/create-account');
    });
    it('Crear cuenta con usuario existente', () => {
        cy.visit('http://localhost:3000/create-account');
        cy.url().should('include', '/create-account');

        // buscar contenido
        cy.contains('Nombre');
        cy.contains('Direccion de correo');
        cy.contains('Contraseña');

        cy.get('#name') // sleccionar el elemento
            .type('criss') // escribir en el elemento
            .should('have.value', 'criss'); // verificar que el elemento tenga el valor escrito
        cy.get('#email') // sleccionar el elemento
            .type('crissge2016@gmail.com') // escribir en el elemento
            .should('have.value', 'crissge2016@gmail.com'); // verificar que el elemento tenga el valor escrito
        cy.get('#password') // sleccionar el elemento
            .type('12345678') // escribir en el elemento
            .should('have.value', '12345678'); // verificar que el elemento tenga el valor escrito

        // Hacer click en el enlace "type"
        cy.get('#signup-button').click();

        // Saber si la url es la correcta
        cy.contains('El correo electrónico ya está en uso');
        cy.get('.swal2-confirm').click();
        cy.url().should('include', '/create-account');
    });
    it('Crear cuenta con correo invalido', () => {
        cy.visit('http://localhost:3000/create-account');
        cy.url().should('include', '/create-account');

        // buscar contenido
        cy.contains('Nombre');
        cy.contains('Direccion de correo');
        cy.contains('Contraseña');

        cy.get('#name') // sleccionar el elemento
            .type('criss') // escribir en el elemento
            .should('have.value', 'criss'); // verificar que el elemento tenga el valor escrito
        cy.get('#email') // sleccionar el elemento
            .type('pruebaCorreo') // escribir en el elemento
            .should('have.value', 'pruebaCorreo'); // verificar que el elemento tenga el valor escrito
        cy.get('#password') // sleccionar el elemento
            .type('12345678') // escribir en el elemento
            .should('have.value', '12345678'); // verificar que el elemento tenga el valor escrito

        // Hacer click en el enlace "type"
        cy.get('#signup-button').click();

        // Saber si la url es la correcta
        cy.contains('El correo electrónico no es válido');
        cy.get('.swal2-confirm').click();
        cy.url().should('include', '/create-account');
    });
    it('Ver informacion de mi cuenta sin iniciar sesion', () => {
        cy.visit('http://localhost:3000/my-account');
        cy.url().should('include', '/');
    });
    it('Ver informacion de mi cuenta con sesion activa', () => {
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
            .should('have.value', 'crissge2016@gmail.com'); // verificar que el elemento tenga el valor escrito
        cy.get('#password') // sleccionar el elemento
            .type('12345678') // escribir en el elemento
            .should('have.value', '12345678'); // verificar que el elemento tenga el valor escrito

        // Hacer click en el enlace "type"
        cy.get('#login-button').click();

        // Saber si la url es la correcta
        cy.url().should('include', '/');

        cy.visit('http://localhost:3000/my-account');
        cy.url().should('include', '/my-account');
    });
    it('Ver carrito sin iniciar sesion', () => {
        cy.visit('http://localhost:3000/');
        // Saber si la url es la correcta
        cy.url().should('include', '/');
        
        cy.get('#cart').click();

        cy.contains('Oops...');
        cy.contains('Para utilizar el carrito debes iniciar sesion');
        cy.get('.swal2-confirm').click();
        cy.url().should('include', '/');
    });
});
