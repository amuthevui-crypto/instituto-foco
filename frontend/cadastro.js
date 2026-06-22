const formCadastro =
    document.querySelector("#formCadastro");

const mensagem =
    document.querySelector("#mensagem");

const nome =
    document.querySelector("#nome");

const email =
    document.querySelector("#email");

const idade =
    document.querySelector("#idade");

const curso =
    document.querySelector("#curso");

const senha =
    document.querySelector("#senha");

formCadastro.addEventListener("submit", function(evento) {

    evento.preventDefault();

    if(
        nome.value === "" ||
        email.value === "" ||
        idade.value === "" ||
        curso.value === "" ||
        senha.value === ""
    ) {

        mensagem.textContent =
            "Preencha todos os campos.";

        mensagem.classList.remove("sucesso");

        mensagem.classList.add("erro");

        return;
    }

    if(senha.value.length < 6) {

        mensagem.textContent =
            "A senha deve ter pelo menos 6 caracteres.";

        mensagem.classList.remove("sucesso");

        mensagem.classList.add("erro");

        return;
    }

    mensagem.textContent =
        "Pedido de cadastro enviado com sucesso! Aguarde aprovação da instituição.";

    mensagem.classList.remove("erro");

    mensagem.classList.add("sucesso");

    formCadastro.reset();

});