# 🔐 API Auth V1 - Autenticação de Scripts (FiveM)

> [!IMPORTANT]
> Esta API foi desenvolvida em **Setembro de 2021** e atualmente há uma versão mais recente.

Esta API foi desenvolvida para processar todas as requisições de licenciamento. O projeto foi estruturado com foco em **Alta Disponibilidade** e **Arquitetura Escalável**, garantindo endpoints performáticos e validações de integridade de dados.

---

## Funcionalidades

* 🔑 **Token Management**: Geração e validação de chaves de licença criptografadas.
* 🌐 **IP Filtering**: Middleware de segurança que valida se a requisição parte de um endereço autorizado.
* 📂 **File Delivery**: Endpoint seguro para o fornecimento dos scripts via download controlado.
* 👥 **Dev Access Control**: Lógica de permissão para acesso de programadores secundários integrada à base de dados.

> [!TIP]
> A API utiliza cabeçalhos de autenticação personalizados para evitar requisições forjadas ou ataques de [Man-in-the-Middle](https://pt.wikipedia.org/wiki/Ataque_man-in-the-middle).

---

## 🛠️ Tecnologias e Infraestrutura

- **Backend**: Node.js v20.12+
- **Estrutura**: JavaScript / [Guard Clauses](https://en.wikipedia.org/wiki/Guard_%28computer_science%29)
- **Segurança**: Tokens e validação de origem e sanitização de entradas.

---

## 📂 Organização Modular

O projeto segue uma organização baseada em **Separação de Preocupações (SoC)**:
- **Routes/Controllers**: Gerenciamento de rotas e processamento de entradas.
- **Middlewares**: Filtros de segurança e validação de tokens em tempo real.
- **Services**: Lógica de negócio e integração direta com a camada de dados.
