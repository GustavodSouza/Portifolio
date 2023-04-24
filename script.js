 const projetos = [
     {
         titulo: 'Meus Gastos',
         github: 'https://github.com/GustavodSouza/MeusGastos',
         site: 'https://meus-gastos.vercel.app/',
         img: './img/meus-gastos.png',
         descricao: 'Projeto pessoal desenvolvido para controlar os gastos mensais e gerar relatórios mensais',
         tecnologias: 'Angular - Typescript - PWA - Sass - Firebase'
     },
     {
         titulo: 'Tasks React',
         github: 'https://github.com/GustavodSouza/Tasks-react.git',
         site: 'https://tasks-react-gustavo.vercel.app',
         img: './img/tasks-react.png',
         descricao: 'Projeto realizado com a finalidade de aprender React e armazenar uma lista de tarefas, sendo possível marcar como feita.'
         + 'Neste projeto é possível realizar um CRUD.',
         tecnologias: 'React - Javascript'
     },
     {
         titulo: 'Teste',
         github: 'https://github.com/GustavodSouza/Tasks-react.git',
         site: '#',
         img: '#',
         descricao: 'Aqui será os próximos projetos',
         tecnologias: 'Em alguma linguagem qualquer'
     },
     {
        titulo: 'Meus Gastos',
        github: 'https://github.com/GustavodSouza/MeusGastos',
        site: 'https://meus-gastos.vercel.app/',
        img: './img/meus-gastos.png',
        descricao: 'Projeto pessoal desenvolvido para controlar os gastos mensais e gerar relatórios mensais',
        tecnologias: 'Angular - Typescript - PWA - Sass - Firebase'
    },
];

const card = document.getElementById('projetos-position');

let contador = 0;

projetos.forEach((item) => {
    contador++;
    let projeto = '';
    let isPar = (contador % 2 == 0);
    let display = (contador > 2) ? 'hidden' : 'show';

    if (isPar) {
        projeto = `
        <div class="card card-right ${display}">
            <div class="projetos-descricao-right">
                <h1>${item.titulo}</h1>
                <p>${item.descricao}</p>
                <p class="bold">${item.tecnologias}</p>
                <div class="botoes-projeto">
                    <img src="./img/visitar.png" alt="Visualizar projeto" onclick='openLink(${JSON.stringify(item.site)})' />
                    <img src="./img/repositorio.png" alt="Abrir repositório do projeto" onclick='openLink(${JSON.stringify(item.github)})' />
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
                    <img src="./img/visitar.png" alt="Visualizar projeto" onclick='openLink(${JSON.stringify(item.site)})' />
                    <img src="./img/repositorio.png" alt="Abrir repositório do projeto" onclick='openLink(${JSON.stringify(item.github)})' />
                </div>
            </div>
        </div>`;
    }

    card.innerHTML += projeto;
});


openLink = (url) => {
    console.log(url);
    window.open(url, '_blank');
}

addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        document.getElementById('botao-topo').style = 'visibility: visible';
    } else {
        document.getElementById('botao-topo').style = 'visibility: hidden';
    }
});

let click = false;
verMaisProjetos = () => {
    click = !click;

    let elems = document.querySelectorAll('.hidden');

    for (let i = 0; i < elems.length; i++) {
        elems[i].style.display = click ? "flex" : 'none';
    }

    document.getElementById('botao-ver-mais').textContent = click ? 'Ver menos' : 'Ver mais';
}