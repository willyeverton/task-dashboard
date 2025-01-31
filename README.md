# Dashboard de Monitoramento de Tarefas

Este é um painel de controle (dashboard) para monitoramento de tarefas em um projeto, desenvolvido como parte de um desafio técnico para uma vaga de Desenvolvedor Frontend.

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
git clone https://github.com/SEU_USUARIO/task-dashboard.git
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

## Estrutura do Projeto

O projeto segue a estrutura padrão de um aplicativo React com a divisão em componentes reutilizáveis e modularizados. Abaixo, a estrutura básica de diretórios:

```bash
src/
│
├── components/ # Componentes reutilizáveis (TaskForm, TaskList, etc.)
├── context/    # Gerenciamento de estado (TaskContext)
├── App.tsx     # Componente principal
├── index.tsx   # Arquivo de entrada da aplicação
└── styles/     # Arquivos de estilo globais
```
