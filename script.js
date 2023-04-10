const projetos = [
    {
        titulo: 'Meus Gastos',
        github: 'https://github.com/GustavodSouza/MeusGastos',
        site: 'https://meus-gastos.vercel.app/',
        img: './img/meus-gastos.png',
        descricao: 'Este é meu principal projeto no momento, desenvolvido a partir de uma necessidade minha '
        + 'de armazenar meus gastos mensais e obter o total de gastos a fim de aumentar minhas economias. O projeto foi desenvolvido utilizando Angular '
        + 'junto ao Firebase como banco de dados. O sistema conta com PWA o que permite instalar na sua máquina ou celular pessoal, facilitando seu acesso.'
        + 'O projeto ainda está sendo aprimorado.',
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