let projetos = [
    {
        titulo: 'Meus Gastos',
        github: 'https://github.com/GustavodSouza/MeusGastos',
        site: 'https://meus-gastos.vercel.app/',
        img: './img/meus-gastos.png',
        descricao: 'Este projeto é sobre controle financeiro',
        tecnologias: 'Angular - Typescript - Sass - Firebase'
    },
    {
        titulo: 'Tasks React',
        github: 'https://github.com/GustavodSouza/Tasks-react.git',
        site: 'www.google.com.br',
        img: '',
        descricao: 'Cadastramento de tarefas em React',
        tecnologias: 'React - Javascript'
    },
    {
        titulo: 'Meus Gastos',
        github: 'https://github.com/GustavodSouza/MeusGastos',
        site: 'https://meus-gastos.vercel.app/',
        img: './img/meus-gastos.png',
        descricao: 'Este projeto é sobre controle financeiro',
        tecnologias: 'Angular - Typescript - Sass - Firebase'
    }
];

const wrapper = document.getElementById('wrapper');

projetos.forEach((item) => {
    let html = `
        <div class='card'>
            <img src='${item.img}' />
            <h1 class="titulo-card">${item.titulo}</h1>
            <button class='button-card' onclick='openModal(${JSON.stringify(item)})'>Mais detalhes</button>
        </div>
    `;

    wrapper.innerHTML += html;
});

openLink = (url) => {
    window.open(url, '_blank');
}

let click = false;
openModal = (projeto) => {
    click = !click;
    
    if (click) {
        document.getElementById('titulo-modal').innerText = projeto.titulo;
        document.getElementById('descricao-modal').innerText = projeto.descricao;
        document.getElementById('tecnologias-modal').innerText = projeto.tecnologias;
        document.getElementById('button-visitar').setAttribute('value', projeto.site);
        document.getElementById('button-repositorio').setAttribute('value', projeto.github);
        document.getElementById('modal').style = "display: block";
    } else {
        closeModal();
    }
}

// window.onclick = function(event) {
//     const button = document.querySelector('.button-card');
//     if (event.target != button) {
//         closeModal();
//     }
// }

closeModal = () => {
    document.getElementById('modal').style = "display: none";
    click = false;
}