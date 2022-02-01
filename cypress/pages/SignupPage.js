class SignupPage {

 go(){

  
    // função viewport redimensiona a pagina para um tamanho padrão
    cy.viewport(1440,900)
    // funcao visit, como o nome sugere visita a pagina mencionada
    cy.visit('https://buger-eats-qa.vercel.app')
    // funcao get localiza a rota e clica 
    cy.get('a[href="/deliver"]').click();
    // checkpoint para saber se estamos no lugar certo
    cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')
    


 }

 fillForm(deliver){

      // input nome a partir do objeto 
      cy.get('input[name="fullName"]').type(deliver.name)
    // input cpf a partir do objeto
    cy.get('input[name="cpf"]').type(deliver.cpf)
    // input email a partir do objeto
    cy.get('input[name="email"]').type(deliver.email)
    // input whatsapp a partir do objeto
    cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
    // input cep a partir do objeto
    cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
    // clicando no botão buscar cep, 
    //colocamos duas propriedades para garantir 
    //que vai clicar no lugar certo.
    cy.get('input[type="button"][value="Buscar CEP"').click();
    // input numero a partir do objeto
    cy.get('input[name="address-number"]').type(deliver.address.number)
    // input complemento a partir do objeto
    cy.get('input[name="address-details"]').type(deliver.address.details)

    // validando o valor do campo address com o valor do campo rua no objeto endereco 
    cy.get('input[name="address"]').should('have.value',deliver.address.street)
    // validando o valor do campo district com o valor do campo bairro no objeto  endereco 
    cy.get('input[name="district"]').should('have.value',deliver.address.district)
    // validando o valor do campo uf com o valor do  campo cidade-uf no objeto endereco 
    cy.get('input[name="city-uf"]').should('have.value',deliver.address.city_state)
    // clicando na opção moto 
    //usamos o contains por se tratar de uma lista não temos propriedades
    // acessiveis, sendo assim estamos buscando o valor que existe em cada li
    cy.contains('.delivery-method li',deliver.delivery_method).click();
    // expressões regulares basicas:
    // ^ buscar prefixo 
    // $ buscar sufixo
    // * buscar geral
    // upload do arquivo que esta na subpasta images dentro de fixtures
    cy.get('input[accept^="image"]').attachFile(deliver.cnh)
    // clica no bottão submit para finalizar o cadastro

 }

  submit(){

    cy.get('form button[type="submit"]').click()



  }
 

  modalContentShouldBe(expectedMessage){

    // valida se o cadastro foi concluido.
    cy.get('.swal2-container .swal2-html-container')
    .should('have.text',expectedMessage)



  }

  alertMessageShouldBe(expectedMessage) {

    // valida se teve algum erro
    //cy.get('.alert-error').should('have.text', expectedMessage)

    //valida se existe o localizador e o texto
    cy.contains('.alert-error',expectedMessage).should('be.visible')
}


} 

 export default new SignupPage;