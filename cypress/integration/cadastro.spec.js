// criar arquivo .gitignore para não commitar a pasta node_modules
// no windows é echo >.gitignore node_modules

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

     
     const entregador = {
       nome : 'Thiago Vasconcelos ',
       cpf : '70070070070',
       email : 'Thiago@email.com',
       whatsapp: '11999999999'


     }


   })




    
})




