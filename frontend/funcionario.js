// ==============================
// Área onde as páginas serão carregadas
// ==============================

const conteudo = document.querySelector("#conteudo");


// ==============================
// Destaca o menu seleccionado
// ==============================

function activarMenu(idMenu) {

    document
        .querySelectorAll(".sidebar li")
        .forEach(function (item) {

            item.classList.remove("activo");

        });

    document
        .querySelector(idMenu)
        .parentElement
        .classList.add("activo");

}


// ==============================
// Carrega uma página dentro do dashboard
// ==============================

function carregarPagina(pagina) {

    fetch(pagina)

        .then(function (resposta) {

            return resposta.text();

        })

        .then(function (html) {

            conteudo.innerHTML = html;

            // Sempre que uma nova página é carregada,
            // activa novamente os eventos dos cartões.
            activarEventosCards();

        });

}


// ==============================
// Liga qualquer menu à sua página
// ==============================

function ligarMenu(idMenu, pagina) {

    const menu = document.querySelector(idMenu);

    if (!menu) return;

    menu.addEventListener("click", function (evento) {

        evento.preventDefault();

        activarMenu(idMenu);

        carregarPagina(pagina);

    });

}


// ==============================
// Liga qualquer cartão à sua página
// ==============================

function ligarCard(idCard, idMenu, pagina) {

    const card = document.querySelector(idCard);

    if (!card) return;

    card.addEventListener("click", function () {

        activarMenu(idMenu);

        carregarPagina(pagina);

    });

}


// ==============================
// Activa os cartões do Dashboard
// ==============================

function activarEventosCards() {

    ligarCard(
        "#cardAlunos",
        "#menuAlunos",
        "paginas_recepcionista/alunos.html"
    );

    ligarCard(
        "#cardPendentes",
        "#menuAlunos",
        "paginas_recepcionista/alunos.html"
    );

    ligarCard(
        "#cardPagamentos",
        "#menuMensalidades",
        "paginas_recepcionista/mensalidades.html"
    );

}


// ==============================
// Liga todos os menus
// ==============================

ligarMenu(
    "#menuDashboard",
    "paginas_recepcionista/conteudo_rece.html"
);

ligarMenu(
    "#menuAlunos",
    "paginas_recepcionista/alunos.html"
);

ligarMenu(
    "#menuMensalidades",
    "paginas_recepcionista/mensalidades.html"
);

ligarMenu(
    "#menuAcademico",
    "paginas_recepcionista/i.academica.html"
);

ligarMenu(
    "#menuRelatorios",
    "paginas_recepcionista/relatorio.html"
);


// ==============================
// Página inicial do dashboard
// ==============================

activarMenu("#menuDashboard");

carregarPagina("paginas_recepcionista/conteudo_rece.html");