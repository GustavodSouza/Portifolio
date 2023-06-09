 let projetos = [
  {
    titulo: "Meus Gastos",
    github: "https://github.com/GustavodSouza/MeusGastos",
    site: "https://meus-gastos.vercel.app/",
    img: "./img/projetos/meus-gastos.png",
    descricao: "Projeto pessoal desenvolvido para controlar os gastos mensais.",
    tecnologias: "Angular - Typescript - Scss - Firebase - Pwa",
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
let clickMode = false;
let contador = 0;
let input = document.getElementById("clrinput");
let textArrayIndex = 0;
let charIndex = 0;
let botaoTopo = document.getElementById("botao-topo");
const textoSpan = document.querySelector(".texto");
const cursorSpan = document.querySelector(".cursor");
const botaoVerMais = document.getElementById("div-botao-ver-mais");
const textArray = [
  "Desenvolvedor Front-end",
  "um entusiasta da tecnologia",
  "dedicado e comprometido",
];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
const card = document.getElementById("projetos-position");

carregarProjetos = (filtrados) => {
  const data = filtrados ? filtrados : projetos;
  
  botaoVerMais.style = data.length > 2 ? "display: flex" : "display: none";

    if (data.length > 0) {
      data.forEach((item) => {
        contador++;
        let projeto = "";
        const isPar = contador % 2 == 0;
        const display = contador > 2 ? "hidden" : "show";
    
        if (isPar) {
          projeto = `
                  <div class="card card-right ${display}">
                      <div class="projetos-descricao-right">
                          <h1>${item.titulo}</h1>
                          <p>${item.descricao}</p>
                          <p class="bold">${item.tecnologias}</p>
                          <div class="botoes-projeto">
                              <a href="${item.site}" target="_blank"><img class="icon" id="visitar" src="./img/visitar.png" alt="Visualizar projeto" loading="lazy" /></a>
                              <a href="${item.github}" target="_blank"><img class="icon" id="repositorio" src="./img/repositorio.png" alt="Abrir repositório do projeto" loading="lazy" /></a>
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
                              <a href="${item.site}" target="_blank"><img class="icon" id="visitar" src="./img/visitar.png" alt="Visualizar projeto" loading="lazy" /></a>
                              <a href="${item.github}" target="_blank"><img class="icon" id="repositorio" src="./img/repositorio.png" alt="Abrir repositório do projeto" loading="lazy" /></a>
                          </div>
                      </div>
                  </div>`;
        }
    
        card.innerHTML += projeto;
      });
      
    } else {
      card.innerHTML = '<h3>Nenhum projeto encontrado com esta tecnologia!</h3>';
    }
  
};

carregarProjetos();

addEventListener("scroll", () => {
  botaoTopo.style = window.scrollY > 80 ? "visibility: visible" : "visibility: hidden";
});

input.addEventListener("input", () => {
  contador = 0;
  card.innerHTML = "";
  if (input.value) {
    click = false;
    document.getElementById("botao-ver-mais").textContent = "Ver mais";
    const filtrados = projetos.filter((item) => item.tecnologias.toLowerCase().indexOf(input.value.toLowerCase()) > -1);
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

escreverTexto = () => {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    textoSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(escreverTexto, typingDelay);
    return;
  }
  cursorSpan.classList.remove("typing");
  setTimeout(apagarTexto, newTextDelay);
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
    return;
  }
  cursorSpan.classList.remove("typing");
  textArrayIndex++;
  if (textArrayIndex >= textArray.length) textArrayIndex = 0;
  setTimeout(escreverTexto, typingDelay + 1100);
};

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(escreverTexto, newTextDelay + 250);
});

themeMode = () => {
  clickMode = !clickMode;
  const html = document.getElementsByTagName("html");
  const imgModo = document.getElementById("modo");
  const themeMode = document.querySelectorAll('.theme-mode');
  const icon = document.querySelectorAll('.icon');

  if (clickMode) {
    html[0].style = "background-color: var(--dark-mode); color: var(--branco)";
    imgModo.setAttribute("src", "./img/light-mode.png");
    botaoTopo.setAttribute('src', './img/seta-light.png');

    for (const element of icon) {
      if (element.id === 'repositorio') {
        element.setAttribute('src', './img/repositorio-light.png');
      }

      if (element.id === 'visitar') {
        element.setAttribute('src', './img/visitar-light.png');
      }
    }

    return;

  }
  html[0].style = "background-color: var(--branco); color: var(--secundario)";
  imgModo.setAttribute("src", "./img/dark-mode.png");
  botaoTopo.setAttribute('src', './img/seta-dark.png');
};

abrirMenuMobile = () => {
  
}