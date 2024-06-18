function login() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if (email == ""){ 
       document.createElement("p");
       mensagem.innerText = "Preencha o campo de e-mail"
       document.getElementById("mensagem").appendChild(mensagem)}
    else if (email != "pesqueiro@gmail.com") {
        document.createElement("p");
        mensagem.innerText = "E-mail inválido"
        document.getElementById("mensagem").appendChild(mensagem)
    }else if (senha == "") {
        document.createElement("p");
        mensagem.innerText = "Preencha o campo de senha"
        document.getElementById("mensagem").appendChild(mensagem)
    }else if (senha != "1234") {
        document.createElement("p");
        mensagem.innerText = "Senha inválida"
        document.getElementById("mensagem").appendChild(mensagem)
    }else{
        window.location.href= "./home.html"
        // window.alert("Sucesso!")
    }
}
