function validCadasPesc() {
   
    const j_nome = document.getElementById('nome-pescador').value
    const j_email = document.getElementById('email-pescador').value
    const j_senha = document.getElementById('senha-pescador').value
 
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
    } else {
     window.alert("Cadastro realizado com sucesso!")
         window.location.href= "./login.html"
         
    }
 
 
 }