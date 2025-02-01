# Dashboard de Monitoramento de Tarefas

Este é um painel de controle (dashboard) para monitoramento de tarefas em um projeto, desenvolvido como parte de um desafio técnico para uma vaga de Desenvolvedor Frontend.

- Acesse a aplicação online aqui: **[https://task-dashboard-beige-theta.vercel.app/](https://task-dashboard-beige-theta.vercel.app/)**

## Funcionalidades

- **Listagem de Tarefas**: Exibe uma lista de tarefas com as seguintes informações:
  - Título da tarefa
  - Descrição breve
  - Status (Pendente, Em progresso, Concluída)
  - Prioridade (Baixa, Média, Alta)
  - Responsável
  - Data de criação

- **Adicionar Nova Tarefa**: Um formulário para criar novas tarefas, com os seguintes campos:
  - Título
  - Descrição
  - Prioridade
  - Responsável
  - Data de vencimento

- **Filtragem e Ordenação**: Permite ao usuário filtrar as tarefas por status e prioridade, além de ordenar as tarefas por data de criação ou data de vencimento.

- **Gráficos** (Bônus): Pode incluir gráficos para monitoramento visual das tarefas.

## Tecnologias Utilizadas

- **React**: Framework JavaScript para construção da interface.
- **Material UI**: Biblioteca de componentes React para um design limpo e responsivo.
- **TypeScript**: Para garantir tipagem estática e evitar erros comuns.
- **React Context API**: Utilizado para gerenciar o estado global da aplicação.
- **Jest e React Testing Library**: Para testes unitários e de integração.

## Como Rodar o Projeto Localmente

Siga as instruções abaixo para rodar o projeto em sua máquina localmente:

### 1. Clone o Repositório

```bash
git clone https://github.com/willyeverton/task-dashboard.git
```
### 2. Navegue até o diretório do projeto

```bash
cd task-dashboard
```
### 3. Instale as dependências

```bash
npm install
```
### 4. Inicie o servidor de desenvolvimento

```bash
npm start
```
O projeto estará disponível no navegador em http://localhost:3000.

## Testes

O projeto utiliza **Jest e React Testing Library** para garantir que os componentes e funcionalidades essenciais estão funcionando corretamente. Para rodar os testes:

```bash
npm test
```

### Testes Automatizados

  - **Cobertura de testes:** Foram implementados testes unitários para os componentes principais (como TaskForm, TaskList, e outros).

  - **Verificação de funcionalidade:** Os testes verificam a renderização correta dos componentes, manipulação de eventos e integração com o estado global.

### Documentação: Integração Contínua e Testes Automatizados
1. Integração Contínua (CI) com GitHub Actions

  A integração contínua (CI) tem como objetivo garantir que o código seja validado automaticamente sempre que houver um novo push, garantindo que os testes sejam executados e que o código esteja funcionando corretamente antes de ser integrado ao repositório principal.

1.2 Configuração do Pipeline de CI

Utilizamos o GitHub Actions para configurar o pipeline de integração contínua. O fluxo de trabalho executa os seguintes passos:

  - Criação do arquivo de configuração: Criamos um arquivo de workflow no repositório, dentro do diretório .github/workflows/ci.yml, que define o processo de CI.

  - Configuração do ambiente:
      A pipeline é acionada sempre que um push é enviado para o repositório.
      O ambiente é configurado com Node.js, garantindo que as dependências sejam instaladas e os testes sejam executados corretamente.

1.3 Explicação dos Passos no Workflow

    actions/checkout@v2: Faz o checkout do código-fonte do repositório.

    actions/setup-node@v2: Configura a versão do Node.js.

    npm ci: Usando para garantir que as dependências sejam instaladas de forma consistente.

    npm install --global vercel@latest: instala o vercel cli globalmente

    npm test: Executa os testes unitários com Jest.

    vercel build --token=${{ secrets.VERCEL_TOKEN }}: Executa o processo de build da aplicação.

    vercel deploy --prebuilt --token ${{ secrets.VERCEL_TOKEN }}: Realiza o deploy da aplicação na Vercel, utilizando o token de acesso armazenado nas secrets do GitHub.

2. Testes Automatizados com Jest e React Testing Library

Os testes automatizados têm como objetivo garantir que os componentes e funções essenciais da aplicação funcionem corretamente. Utilizamos o Jest como framework de testes e o React Testing Library para testar a renderização e a interação dos componentes.

2.2. Configuração do Jest e React Testing Library

  Instalação das dependências: As dependências para o Jest e React Testing Library foram instaladas com os seguintes comandos:

```bash
npm install --save-dev jest @types/jest @testing-library/react @testing-library/jest-dom
```

Configuração do Jest: A configuração do Jest foi feita dentro do arquivo tsconfig.json, garantindo que ele saiba como rodar os testes.

Exemplo de configuração no tsconfig.json:

```bash
  "types": [
      "jest",
      "@testing-library/jest-dom"
    ]
```

Testes com React Testing Library: O React Testing Library foi configurado para renderizar os componentes e interagir com a interface de maneira a simular a experiência do usuário. Utilizamos funções como render(), fireEvent(), e screen para testar a interação com os componentes.
