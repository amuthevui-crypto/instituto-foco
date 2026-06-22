console.log("Sistema Instituto Foco iniciado");

const formulario = document.querySelector("#loginForm");

const usuario = document.querySelector("#usuario");

const senha = document.querySelector("#senha");

const mensagem = document.querySelector("#mensagem");

const perfil = document.querySelector("#perfil");

const linkCadastro = document.querySelector("#linkCadastro");

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

    window.location.href = "estudante.html";

}

    }, 1000);

});

perfil.addEventListener("change", function() {

    if(perfil.value === "aluno") {

        usuario.placeholder = "Código de Estudante";

        linkCadastro.innerHTML =
            'Não tens uma conta? <a href="cadastro.html">Cadastre-se</a>';

    }

    else {

        usuario.placeholder = "Usuário";

        linkCadastro.innerHTML = "";

    }

});