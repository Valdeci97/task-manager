# <div align="center">Task manager</div>

### <div align="center">Web app para gerenciamento de tarefas</div>


## <div align="center">Tecnologias</div> https://task-manager-nu-ruddy.vercel.app/login
Projeto feito para gerenciamento de tarefas do dia a dia via browser. [deploy](https://task-manager-valdeci97.vercel.app)

PS: Essa aplicação faz consumo de uma API gratuita, isto é, ela "dorme". Caso tenha algum problema com relação ao tempo para executar login ou criar usuário, tente ativar a API manualmente clicando [AQUI](https://todo-api-dev.onrender.com/api-docs). Se o link não abrir a doc API - após um tempo considerável - e o problema continuar, por favor me avise.

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="60px" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" width="60px" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="60px" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" width="60px" />
</div>

##

### <div align="center">Como usar</div>

Você vai precisar ter instalado [Git](https://git-scm.com/), [Docker](https://docs.docker.com/engine/install/), [docker-compose plugin](https://docs.docker.com/compose/install/)\*\*

\*\*Apenas linux. Windows e Mac já instalam junto ao docker desktop.

##

Abra um terminal e clone o repositório - exemplo com chave SSH.
```
git clone git@github.com:Valdeci97/task-manager.git
```

Inicie o container docker.

```
docker-compose up -d
```

Caso o comando falhe, tente

```
docker compose up -d
```

Se nada de errado aconteceu a aplicação estará rodando no localhost na porta 5000.

Rodando testes

```
docker exec -it task_manager bash

npm test
```

Parando os containeres

```
docker compose down

ou

docker-compose down
```

