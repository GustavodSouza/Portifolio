let projetos = [
  {
    titulo: "Meus Gastos",
    github: "https://github.com/GustavodSouza/MeusGastos",
    site: "https://meus-gastos.vercel.app/",
    img: "./img/projetos/meus-gastos.png",
    descricao: "Projeto pessoal desenvolvido para controlar os gastos mensais.",
    tecnologias: "Angular - Typescript - PWA - Sass - Firebase",
  },
  {
    titulo: "Tasks React",
    github: "https://github.com/GustavodSouza/Tasks-react.git",
    site: "https://tasks-react-gustavo.vercel.app",
    img: "./img/projetos/tasks-react.png",
    descricao:
      "Projeto realizado com a finalidade de aprender React. Nele é possível armazenar uma lista de tarefas, sendo possível adicionar, marcar como feita e excluir.",
    tecnologias: "React - Javascript",
  },
  {
    titulo: "Portifólio",
    github: "https://github.com/GustavodSouza/Portifolio.git",
    site: "https://gustavosouzaportifolio.vercel.app/",
    img: "./img/projetos/portifolio.png",
    descricao: "Portifólio feito por mim utilizando HTML CSS E JAVASCRIPT.",
    tecnologias: "Html - Css - Javascript",
  },
];

let click = false;
let contador = 0;
let input = document.getElementById("clrinput");
let textArrayIndex = 0;
let charIndex = 0;
const textoSpan = document.querySelector(".texto");
const cursorSpan = document.querySelector(".cursor");
const textArray = [
  "Desenvolvedor Front-end",
  "um entusiasta da tecnologia",
  "dedicado e comprometido",
  "o que sua empresa precisa!",
];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
const card = document.getElementById("projetos-position");


carregarProjetos = (filtrados) => {
  let data = !filtrados ? projetos : filtrados;
  document.getElementById('div-botao-ver-mais').style = data.length > 2 ? 'display: flex' : 'display: none';
  data.forEach((item) => {
    contador++;
    let projeto = "";
    let isPar = contador % 2 == 0;
    let display = contador > 2 ? "hidden" : "show";

    if (isPar) {
      projeto = `
              <div class="card card-right ${display}">
                  <div class="projetos-descricao-right">
                      <h1>${item.titulo}</h1>
                      <p>${item.descricao}</p>
                      <p class="bold">${item.tecnologias}</p>
                      <div class="botoes-projeto">
                          <a href="${item.site}" target="_blank"><img src="./img/visitar.png" alt="Visualizar projeto" loading="lazy" /></a>
                          <a href="${item.github}" target="_blank"><img src="./img/repositorio.png" alt="Abrir repositório do projeto" loading="lazy" /></a>
                      </div>
                  </div>
                  <div class="projetos-img">
                      <img src="${item.img}" alt="" />
                  </div>
              </div>`;
    } else {
      projeto = `
              <div class="card card-left ${display}">
                  <div class="projetos-img">
                      <img src="${item.img}" alt="" />
                  </div>
                  <div class="projetos-descricao-left">
                      <h1>${item.titulo}</h1>
                      <p>${item.descricao}</p>
                      <p class="bold">${item.tecnologias}</p>
                      <div class="botoes-projeto">
                          <a href="${item.site}" target="_blank"><img src="./img/visitar.png" alt="Visualizar projeto" loading="lazy" /></a>
                          <a href="${item.github}" target="_blank"><img src="./img/repositorio.png" alt="Abrir repositório do projeto" loading="lazy" /></a>
                      </div>
                  </div>
              </div>`;
    }

    card.innerHTML += projeto;
  });
};

carregarProjetos();

addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    document.getElementById("botao-topo").style = "visibility: visible";
  } else {
    document.getElementById("botao-topo").style = "visibility: hidden";
  }
});


input.addEventListener("input", () => {
  contador = 0;
  card.innerHTML = "";
  if (input.value) {
    click = false;
    document.getElementById("botao-ver-mais").textContent = 'Ver mais';
    let filtrados = projetos.filter(
      (item) => item.tecnologias.toLowerCase().indexOf(input.value.toLowerCase()) > -1
    );
    carregarProjetos(filtrados);
  } else {
    carregarProjetos();
  }
});


verMaisProjetos = () => {
  click = !click;

  let elems = document.querySelectorAll(".hidden");

  for (let i = 0; i < elems.length; i++) {
    elems[i].style.display = click ? "flex" : "none";
  }

  document.getElementById("botao-ver-mais").textContent = click
    ? "Ver menos"
    : "Ver mais";
};

escreverTexto = () => {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    textoSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(escreverTexto, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(apagarTexto, newTextDelay);
  }
};

apagarTexto = () => {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    textoSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(apagarTexto, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(escreverTexto, typingDelay + 1100);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(escreverTexto, newTextDelay + 250);
});
