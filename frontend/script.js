console.log("Sistema Instituto Foco iniciado");

const formulario = document.querySelector("#loginForm");

const usuario = document.querySelector("#usuario");

const senha = document.querySelector("#senha");

const mensagem = document.querySelector("#mensagem");

const perfil = document.querySelector("#perfil");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    if(
        perfil.value === "" ||
        usuario.value === "" ||
        senha.value === ""
    ) {

        mensagem.textContent = "Preencha todos os campos";

        mensagem.classList.remove("sucesso");

        mensagem.classList.add("erro");

        return;

    }

    mensagem.textContent = "Login realizado com sucesso";

    mensagem.classList.remove("erro");

    mensagem.classList.add("sucesso");

    setTimeout(() => {

        if(perfil.value === "admin") {

            window.location.href = "dashboard.html";

        }

        else if(perfil.value === "funcionario") {

            window.location.href = "alunos.html";

        }

        else if(perfil.value === "aluno") {

            alert("Portal do aluno ainda será criado");

        }

    }, 1000);

});