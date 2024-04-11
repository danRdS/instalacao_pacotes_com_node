const requisitar = async() => {
    const url = 'http://localhost:4200/users';
    const loader = document.querySelector('.loader');
    const elemento_lista = document.querySelector('.content ul');
    const areaMensagemDeErro = document.querySelector('.areaMensagemDeErro');

    loader.style.display = "block";
    areaMensagemDeErro.style.display = 'none';

    try {
        const usuarios = (await axios.get(url)).data;
        elemento_lista.innerHTML = '';

        Object.values(usuarios).forEach(dado => {
            const li = document.createElement('li');
            li.innerHTML = '<i class="fa-solid fa-user"></i>';
            
            for(let data in dado) {
                li.innerHTML += `<p>${data}: ${dado[data]}</p>`;
            }
            
            loader.style.display = "none";            
            elemento_lista.appendChild(li);
        });

    } catch(error) { 
        console.error(error.message);
        loader.style.display = "none";
        areaMensagemDeErro.style.display = 'block';
        areaMensagemDeErro.firstElementChild.textContent = `Erro: ${error.message}`;
    }
}

function mostrarUsuarios() {
    const btn = document.querySelector('button');
    btn.classList.toggle('ativo');
    requisitar();
}

const container = document.querySelector('.content');
const bolha = document.querySelector('.bolha');

container.onpointermove = event => {
    const containerRect = container.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;
    
    bolha.style.left = `${mouseX}px`;
    bolha.style.top = `${mouseY}px`;    
    bolha.style.opacity = 1;
}

container.onpointerleave = () => bolha.style.opacity = 0;

const tentarDeNovo = () => requisitar();