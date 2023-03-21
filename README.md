# Projeto Integrador - Gerenciador de Dispositivos

Este projeto tem como finalidade servir de material de avaliação para a diciplina Projeto Integrador da Universidade de Santa Cruz do Sul [(UNISC)](https://www.unisc.br/pt/) ... 

A aplicação constitui-se basicamente dos conceitos de catalogação e pesquisa das máquinas por detalhes técnicos. Tela inicial com listagem dos dispositivos que já foram cadastrados e botão “Cadastrar dispositivo” que direciona para tela de cadastro de dispositivos. Nesta vai conter um formulário onde serão preenchidas algumas especificidades como: nome do dispositivo, número de IP, Sistema Operacional, tipo de dispositivo, processador, memória RAM e usuário que está logado na máquina. 
Ao final terá dois botões, “Cancelar” e “Salvar” onde pode cancelar a operação e salvar os dados respectivamente. Ao salvar o formulário, será incluída uma nova linha na tabela onde contam todos os dados preenchidos. 

Será desenvolvido em ambiente web, de forma responsiva. Desta forma o atendimento ao suporte de TI será facilitado, pois poderá ser consultado no navegador. Utilizaremos HTML, CSS, REACT e JSON para armazenamento dos dados em servidor. Projeto desenvolvido por: [Cassia Scherer](https://github.com/cassia-shr) ...

## Como rodar o projeto

### `Instalação do NodeJS`

Primeiramente é necessario a instalação do compilador Javascript [NodeJs](https://nodejs.org/en).

### `Instalação das Dependências`

Após instalação do [NodeJs](https://nodejs.org/en) é necessario rodar o comando **`npm install`** na raiz do projeto e aguardar a instalação das dependências.

### `Inicialização do Json-Server`

Assim que as **dependências** forem instaladas é preciso iniciar o [Json-Server](https://github.com/typicode/json-server). Para isso basta rodar o comando **`node server`** na raiz do projeto, assim que finalizada a inicialização o terminal irá apresentar a seguinte mensagem `'Server is running in "http://localhost:8080/dispositivos"!'`.

### `Inicialização do Front-End`

Assim que o **Servidor Json** for inicializado podemos proseguir e iniciar o serviço de front. Para isso basta rodar o comando **`npm start`** na raiz do projeto, assim que finalizada a inicialização o terminal irá apresentar a seguinte mensagem `Compiled successfully!`.

## Como utilizar a aplicação

O projeto possui as seguintes funcionalidades: cadastro e pesquisa de dispositivos.

### Tela Inicial

Ao acessar a aplicação na tela inicial temos a apresentação da lista de dispositivos com suas especificidades.

#### Filtro

Pode-se utilizar o filtro para localizar por IP, SO ou TIPO.

### Tela de Edição

Para o melhor controle podemos adicionar, editar e remover dispositivos.
