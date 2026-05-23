console.log("Sistema Instituto Foco iniciado");
const formulario = document.querySelector("#loginForm");

const usuario = document.querySelector("#usuario");

const senha = document.querySelector("#senha");

const mensagem = document.querySelector("#mensagem");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    if(usuario.value === "" || senha.value === "") {

        mensagem.textContent = "Preencha todos os campos";

        mensagem.classList.remove("sucesso");

        mensagem.classList.add("erro");

        return;
    }

    mensagem.textContent = "Login realizado com sucesso";

    mensagem.classList.remove("erro");

    mensagem.classList.add("sucesso");

    setTimeout(() => {

        window.location.href = "dashboard.html";

    }, 1000);
});