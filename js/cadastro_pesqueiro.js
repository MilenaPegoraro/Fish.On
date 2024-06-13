function validCadasPesq() {
   
        const j_nome = document.getElementById('inome').value
        const j_email = document.getElementById('email').value
        const j_senha = document.getElementById('senha').value
        const j_cnpj = document.getElementById('cnpj').value
        const j_endereco = document.getElementById('endereco').value
        const j_imagem = document.getElementById('imagem').value
    
        // console.log(j_nome, j_email, j_senha, j_cnpj, j_endereco)
    
    
        if (j_nome == "") {
            document.createElement("p");
            mensagem.innerText = "Preencha o campo de nome"
            document.getElementById("mensagem").appendChild(mensagem)
        } else if (j_email == "") {
            document.createElement("p");
            mensagem.innerText = "Preencha o campo de e-mail"
            document.getElementById("mensagem").appendChild(mensagem)
     
        } else if (j_senha == "") {
            document.createElement("p");
            mensagem.innerText = "Preencha o campo de senha"
            document.getElementById("mensagem").appendChild(mensagem)
    
        } else if (j_cnpj == "") {
            document.createElement("p");
            mensagem.innerText = "Preencha o campo de CNPJ"
            document.getElementById("mensagem").appendChild(mensagem)
      
        } else if (j_endereco == "") {
            document.createElement("p");
            mensagem.innerText = "Preencha o campo de endereço"
            document.getElementById("mensagem").appendChild(mensagem)
 
        } else {
            window.alert("Cadastro realizado com sucesso!")
            window.location.href= "./login.html"
    
        }
    
    
    }

