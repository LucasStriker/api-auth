# 🔐 API Auth v1 - Autenticação de Scripts (FiveM)

> [!IMPORTANT]
> Esta API foi desenvolvida em **Setembro de 2021** e está obsoleta possuindo uma [versão mais recente](https://github.com/LucasStriker/api-auth2).

Esta API foi desenvolvida para processar todas as requisições de licenciamento. O projeto foi estruturado com foco em **Alta Disponibilidade** e **Arquitetura Escalável**, garantindo endpoints performáticos e validações de integridade de dados.

---

## Funcionalidades

* 🔑 **Token Management**: Geração e validação de chaves de licença criptografadas.
* 🌐 **IP Filtering**: Middleware de segurança que valida se a requisição parte de um endereço autorizado.
* 📂 **File Delivery**: Endpoint seguro para o fornecimento dos scripts via download controlado.
* 👥 **Dev Access Control**: Lógica de permissão para acesso de programadores secundários integrada à base de dados.

---

## 🛠️ Tecnologias e Infraestrutura

- **Backend**: Node.js [v14.17.6 (LTS)](https://nodejs.org/en/blog/release/v14.17.6)
- **Estrutura**: JavaScript / [Guard Clauses](https://en.wikipedia.org/wiki/Guard_%28computer_science%29)
