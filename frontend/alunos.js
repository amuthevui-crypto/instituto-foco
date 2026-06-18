const formAluno = document.querySelector("#formAluno");

const nome = document.querySelector("#nome");

const curso = document.querySelector("#curso");

const email = document.querySelector("#email");

const idade = document.querySelector("#idade");

const senha = document.querySelector("#senha");

const listaAlunos = document.querySelector("#listaAlunos");

const alunos = [];

formAluno.addEventListener("submit", function(evento) {

    evento.preventDefault();
    if(
    nome.value === "" ||
    email.value === "" ||
    idade.value === "" ||
    curso.value === "" ||
    senha.value === ""
){
    alert("Preencha todos os campos!");

    return;
}

const aluno = {

    id: Date.now(),

    codigoEstudante: "",

    nome: nome.value,

    curso: curso.value,

    idade: idade.value,

    email: email.value,

    senha: senha.value,

    status: "Pendente"

};
alunos.push(aluno);

renderizarAlunos();

formAluno.reset();

});

function renderizarAlunos() {

    listaAlunos.innerHTML = "";

    alunos.forEach(function(aluno, indice) {

        listaAlunos.innerHTML += `
        
            <tr>

                <td>${aluno.codigoEstudante || "-"}</td>

                <td>${aluno.nome}</td>

                <td>${aluno.curso}</td>

                <td class="${aluno.status}">
                    ${aluno.status}
                </td>

                <td>

                    <button
                     onclick="aprovarAluno(${indice})"
                    >
                     Aprovar
                    </button>

                    <button
                    class="btn-remover"
                        onclick="removerAluno(${indice})"
                    >
                     Remover
                </button>

                </td>

            </tr>

        `;
    });

}
function aprovarAluno(indice) {

    if(alunos[indice].status === "Activo") {

        return;

    }

    alunos[indice].status = "Activo";

    alunos[indice].codigoEstudante =
        "FOCO" + String(indice + 1).padStart(3, "0");

    renderizarAlunos();

}

function removerAluno(indice) {

    alunos.splice(indice, 1);

    renderizarAlunos();

}