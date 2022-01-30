// criar arquivo .gitignore para não commitar a pasta node_modules
// usar o site gitignore.io para criar o gitignore (+ facil)

describe('Cadastro',()=>{ 

   it('Usuario deve se tornar um entregador',()=>{

    // função viewport redimensiona a pagina para um tamanho padrão
    cy.viewport(1440,900)
    // funcao visit, como o nome sugere visita a pagina mencionada
    cy.visit('https://buger-eats.vercel.app/')
    // funcao get localiza a rota e clica 
    cy.get('a[href="/deliver"]').click();
    // checkpoint para saber se estamos no lugar certo
    cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')
    
     
    //aqui temos um objeto dentro de outro objeto.
     const entregador = {
       nome : 'Thiago Vasconcelos ',
       cpf : '70070070070',
       email : 'Thiago@email.com',
       whatsapp: '11999999999',
       endereco: {
         cep: '04534011',
         rua: 'Rua Joaquim Floriano',
         numero: '1000',
         complemento: 'Ap 145',
         bairro: 'Itaim Bibi',
         cidade_uf:'São Paulo/SP'


       },
       metodo_entrega : 'Moto',
       cnh:'images/cnh-digital.jpg'


     }

    // input nome a partir do objeto 
    cy.get('input[name="name"]').type(entregador.nome)
    // input cpf a partir do objeto
    cy.get('input[name="cpf"]').type(entregador.cpf)
    // input email a partir do objeto
    cy.get('input[name="email"]').type(entregador.email)
    // input whatsapp a partir do objeto
    cy.get('input[name="whatsapp"]').type(entregador.whatsapp)
    // input cep a partir do objeto
    cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
    // clicando no botão buscar cep, 
    //colocamos duas propriedades para garantir 
    //que vai clicar no lugar certo.
    cy.get('input[type="button"][value="Buscar CEP"').click();
    // input numero a partir do objeto
    cy.get('input[name="address-number"]').type(entregador.endereco.numero)
    // input complemento a partir do objeto
    cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

    // validando o valor do campo address com o valor do campo rua no objeto endereco 
    cy.get('input[name="address"]').should('have.value',entregador.endereco.rua)
    // validando o valor do campo district com o valor do campo bairro no objeto  endereco 
    cy.get('input[name="district"]').should('have.value',entregador.endereco.bairro)
    // validando o valor do campo uf com o valor do  campo cidade-uf no objeto endereco 
    cy.get('input[name="city-uf"]').should('have.value',entregador.endereco.cidade_uf)
    // clicando na opção moto 
    //usamos o contains por se tratar de uma lista não temos propriedades
    // acessiveis, sendo assim estamos buscando o valor que existe em cada li
    cy.contains('.delivery-method li',entregador.metodo_entrega).click();
    // expressões regulares basicas:
    // ^ buscar prefixo 
    // $ buscar sufixo
    // * buscar geral
    // upload do arquivo que esta na subpasta images dentro de fixtures
    cy.get('input[accept^="image"]').attachFile(entregador.cnh)
    // clica no bottão submit para finalizar o cadastro
    cy.get('form button[type="submit"]').click()
    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

    // valida se o cadastro foi concluido.
    cy.get('.swal2-container .swal2-html-container')
    .should('have.text',expectedMessage)

   })




    
})




