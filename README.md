# Projeto de instalação do Font Awesome, Axios e JSON Server com node

Este é um projeto de exemplo que demonstra como instalar e usar a biblioteca Font Awesome para ícones, o Axios para fazer solicitações HTTP e o JSON Server para criar uma simulação de API para desenvolvimento com requisição e a resposta dela renderizada em uma tela simples com o uso de tecnologias como html, css e javascript.

## Passo 1: Instalação do Node.js

Antes de começar, você precisará do Node.js instalado em seu sistema. Se você ainda não tiver, faça o download e instale a versão adequada para o seu sistema a partir do [site oficial do Node.js](https://nodejs.org/).

## Passo 2: Inicie o pacote do projeto

Abra o terminal e execute o comando 
```bash
npm init -y 
```

Isso irá iniciar o pacote do seu projeto.

## Passo 3: Instação dos pacotes

- <a href="#font-awesome">Font Awesome</a>
- <a href="#axios">Axios</a>
- <a href="#json-server">JSON Server</a>

## Font-Awesome
### Passo 1: Instalação do Font Awesome

Abra o terminal e execute o seguinte comando para instalar o Font Awesome via npm (Node Package Manager):

```bash
npm install @fortawesome/fontawesome-free
```

### Passo 2: Adicionar tag no HTML
Para utilizar a biblioteca, adicione a tag de link do Font Awesome no seu arquivo HTML:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
```

Isso permitirá que você utilize o Font Awesome no seu projeto.

###  Passo 3: Usando o ícone no seu projeto

Implemente o seguinte trecho de código em seu arquivo `html` no elemento que deseja utilizá-lo:

```HTML
<i class="fa-solid fa-rotate"></i>
```

## Axios
### Passo 1: Instalação do axios

Abra o terminal e execute o seguinte comando para instalar o JSON Server via npm (Node Package Manager):

```bash
npm install axios
```

## Passo 2: Adicionar a tag no HTML
Para utilizar a biblioteca, adicione a tag de script do Font Awesome no seu arquivo HTML:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.8/axios.min.js" integrity="sha512-PJa3oQSLWRB7wHZ7GQ/g+qyv6r4mbuhmiDb8BjSFZ8NZ2a42oTtAq5n0ucWAwcQDlikAtkub+tPVCw4np27WCg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

Isso permitirá que você utilize o axios no seu projeto.

## JSON-Server
### Passo 1: Instalação do JSON Server

Abra o terminal e execute o seguinte comando para instalar globalmente o JSON Server via npm (Node Package Manager):

```bash
npm install -g json-server
```

Isso permitirá que você utilize o JSON Server de qualquer diretório no seu sistema.

### Passo 2: Instalação do JSON Server

Abra o terminal e execute o seguinte comando para instalar globalmente o JSON Server via npm (Node Package Manager):

```bash
npm install -g json-server
```

Isso permitirá que você utilize o JSON Server de qualquer diretório no seu sistema.

### Passo 3: Crie um arquivo JSON

Crie um arquivo chamado `db.json` com os dados que você deseja simular como resposta da API. Aqui está um exemplo simples:

```json
{
  "posts": [
    { "id": 1, "title": "Postagem 1" },
    { "id": 2, "title": "Postagem 2" },
    { "id": 3, "title": "Postagem 3" }
  ]
}
```

### Passo 4: Inicie o JSON Server
**ATENÇÃO!**

**Este passo é importante para a boa execução do programa, pois sem ele a requisição não poderá ser feita.**

No terminal :computer:, navegue até o diretório onde o arquivo `db.json` está localizado e execute o seguinte comando:

```bash
json-server --watch db.json
```

O JSON Server iniciará uma API REST fake que estará disponível em `http://localhost:3000`.



Para facilitar o uso, você também pode salvar este comando no package.json como `script`, como por exemplo:

```json
"scripts": {
    "server": "json-server --watch db.json --port 3000"
  },
```

Para executá-lo, use o seguinte comando via npm:

```bash
npm run server
```

### Passo 5: Acessando a API

Agora que o servidor está em execução, você pode fazer solicitações para a API REST fake. Aqui estão alguns exemplos:

- :computer: Recuperar todas as postagens:
  ```
  GET http://localhost:3000/posts
  ```

- :computer: Recuperar uma postagem específica:
  ```
  GET http://localhost:3000/posts/1
  ```

- :computer: Adicionar uma nova postagem:
  ```
  POST http://localhost:3000/posts
  Body: { "title": "Nova Postagem" }
  ```

Agora você tem um servidor JSON em execução que pode ser usado para testar suas aplicações antes de integrá-las a uma API real.

## Sobre mim 😎

Me chamo Daniel, sou estudante de programação voltado para o frontend. Para conhecer um pouco mais sobre mim, acesse:
* [Github](https://github.com/danRdS)
* [Linkedin](https://www.linkedin.com/in/daniel-ribeiro-da-silva-37b313239/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)