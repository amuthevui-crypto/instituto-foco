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

   const aluno = {
    id: Date.now(),
    nome: nome.value,
    curso: curso.value,
    idade: idade.value,
    email: email.value,
    senha: senha.value,
    status: "Pendente mediante a inscrição"
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

                <td>${aluno.nome}</td>

                <td>${aluno.curso}</td>

                <td>${aluno.status}</td>

                <td>
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

function removerAluno(indice) {

    alunos.splice(indice, 1);

    renderizarAlunos();

}