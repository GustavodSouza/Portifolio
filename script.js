 let projetos = [
  {
    titulo: "Meus Gastos",
    github: "https://github.com/GustavodSouza/MeusGastos",
    site: "https://meus-gastos.vercel.app/",
    img: "assets/meus-gastos.png",
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
  {
    titulo: "Portifólio",
    github: "https://github.com/GustavodSouza/Portifolio.git",
    site: "https://gustavosouzaportifolio.vercel.app/",
    img: "assets/portifolio.png",
    descricao: "Portifólio criado para mostrar meus principais projetos construídos no decorrer da minha carreira como programador.",
    tecnologias: "Html - Css - Javascript",
  },
];

let click = false;
let contador = 0;
let input = document.getElementById("clrinput");
const botaoVerMais = document.getElementById("div-botao-ver-mais");
const card = document.getElementById("projetos-card");

carregarProjetos = (filtrados) => {
  const data = filtrados ? filtrados : projetos;
  
    botaoVerMais.style = data.length > 2 ? "display: flex" : "display: none";

    if (data.length > 0) {
      data.forEach((item) => {
        contador++;
        let projeto = '';
        const display = contador > 2 ? "hidden" : "show";

        projeto = `
          <div class="projeto ${display}" data-aos="fade-up" data-aos-delay="350">
            <img src="${item.img}" alt="Prévia do projeto" loading="lazy" />
            <div class="description-projeto">
              <h2>${item.titulo}</h2>
              <p>${item.descricao}</p>
              <strong>${item.tecnologias}</strong>
              <div class="buttons-card">
                  <a href="${item.github}" target="_blank">
                      Repositório
                      <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="${item.site}" target="_blank">
                      Visitar projeto
                      <i class="fa-solid fa-eye"></i>
                  </a>
              </div>
          </div>
          `;

        card.innerHTML += projeto;
      });
    } else {
      card.innerHTML = '<strong>Nenhum projeto encontrado com esta tecnologia!</strong>';
    }
};

carregarProjetos();

input.addEventListener("input", () => {
  contador = 0;
  card.innerHTML = "";
  if (input.value) {
    click = false;
    document.getElementById("botao-ver-mais").textContent = "Ver mais";
    const filtrados = projetos.filter((item) => item.tecnologias.toLowerCase().indexOf(input.value.toLowerCase()) > -1 || 
    item.titulo.toLowerCase().indexOf(input.value.toLowerCase()) > -1);
    carregarProjetos(filtrados);
    return;
  }
  carregarProjetos();
});

verMaisProjetos = () => {
  click = !click;

  const elems = document.querySelectorAll(".hidden");

  for (const elem of elems) {
    elem.style.display = click ? "flex" : "none";
  }

  document.getElementById("botao-ver-mais").textContent = click
    ? "Ver menos"
    : "Ver mais";
};
