let projetos = [
  {
    titulo: "Meus Gastos",
    github: "https://github.com/GustavodSouza/MeusGastos",
    site: "https://meus-gastos.vercel.app/",
    img: "assets/meus-gastos2.png",
    descricao: "Projeto pessoal desenvolvido para controlar os gastos mensais. Neste projeto é possível registrar os gastos e fazer consultas obtendo o valor total por mês.",
    tecnologias: "Angular - Typescript - Scss - Firebase - Pwa",
  },
  {
    titulo: "Tasks React",
    github: "https://github.com/GustavodSouza/Tasks-react.git",
    site: "https://tasks-react-gustavo.vercel.app",
    img: "assets/tasks-react.png",
    descricao:
      "Projeto realizado com a finalidade de aprender React. Nele é possível armazenar uma lista de tarefas, sendo possível adicionar, marcar como feita e excluir.",
    tecnologias: "React - Javascript",
  },
];

let click = false;
let input = document.getElementById("clrinput");
const botaoVerMais = document.getElementById("ver-mais");
const card = document.getElementById("projetos-card");

carregarProjetos = (filtrados) => {
  const data = filtrados ? filtrados : projetos;

  botaoVerMais.style.display = data.length > 4 ? '' : 'none';

  if (data.length > 0) {
    data.forEach((item, index) => {
      const display = index > 3 ? "hidden" : "show"

      card.innerHTML += `
        <div class="col-md-5 col-sm-12 ${display} cards" style="border: 1px solid white; border-radius: 5px">
            <div class="column">
                <img style="width: 100%; height: 300px" class="imagem-projeto" src="${item.img}" alt="Prévia do projeto" loading="lazy" />
                <p class="h4 text-center">${item.titulo}</p>
                <p>${item.descricao}</p>
                <strong>${item.tecnologias}</strong>
                <div class="d-flex justify-content-center py-3 gap-4">
                   <a data-toggle="tooltip" data-placement="top" title="Visualizar Repositório" class="buttons-card" href="${item.github}" target="_blank">
                       Repositório
                       <i class="fa-brands fa-github icon"></i>
                   </a>
                   <a data-toggle="tooltip" data-placement="top" title="Visualizar Projeto" class="buttons-card" href="${item.site}" target="_blank">
                       Visitar projeto
                       <i class="fa-solid fa-eye icon"></i>
                   </a>
               </div>
            </div>
        </div>`;
    });
    const elems = document.querySelectorAll(".hidden");
    for (const elem of elems) {
      elem.style.display = "none";
    }
  } else {
    card.innerHTML = '<strong>Nenhum projeto encontrado com esta tecnologia!</strong>';
  }
};

carregarProjetos();

input.addEventListener("input", () => {
  card.innerHTML = "";

  if (input.value) {
    click = false;
    const inputSearch = input.value.toLowerCase()
    const filtrados = projetos.filter((item) => item.tecnologias.toLowerCase().match(inputSearch) || item.titulo.toLowerCase().match(inputSearch))
    carregarProjetos(filtrados);
  } else {
    carregarProjetos();
  }
});

verMaisProjetos = () => {
  click = !click;

  const elems = document.querySelectorAll(".hidden");

  for (const elem of elems) {
    elem.style.display = click ? "flex" : "none";
  }

  botaoVerMais.textContent = click
    ? "Ver menos"
    : "Ver mais";
};