# Fullstack Application: Angular Frontend + Spring Boot Backend

## Descrição

Este é um projeto fullstack que integra um frontend Angular com um backend Spring Boot. O frontend é responsável pela interface do usuário, enquanto o backend fornece uma API REST para manipulação de dados. A aplicação é empacotada e executada usando Docker, facilitando o deploy e o gerenciamento de dependências.

## Estrutura do Projeto

- **frontend_angular/**: Contém o código da aplicação Angular (front-end).
- **backend_spring_boot/**: Contém o código da aplicação Spring Boot (back-end).
- **docker-compose.yml**: Arquivo Docker Compose para configurar e rodar os containers Docker do backend, frontend e banco de dados.

## Tecnologias Utilizadas

- **Frontend:**
  - Angular 8+
  - TypeScript
  - RxJS
  - HTML/CSS
  - NGINX (para servir a aplicação)

- **Backend:**
  - Spring Boot 2.5+
  - Maven
  - Java 17
  - JPA (com MySQL)
  - JWT para autenticação

- **Banco de Dados:**
  - MySQL 8

- **Ferramentas:**
  - Docker
  - Docker Compose

## Pré-requisitos

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
