describe('login',()=>{
    it('log ins', () => {

        let data = {acao: 'logar',
        item: 'Usuario',
        can_id: 2,
        us_re: 90349040168,
        us_senha: 'beta'}
        
        cy.visit('https://betasun.before.com.br/_sys/');
        
        cy.request({
            method: 'POST',
            url: '_sys/sqlLog.php', // baseUrl will be prepended to this url
            form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            body: data
          })

        cy.getCookie('PHPSESSID').should('exist')

        cy.visit('https://betasun.before.com.br/_sys/main.php')
    })
})