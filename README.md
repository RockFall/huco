# Hu.Co — Human Company

Uma landing page corporativa satirical para a Hu.Co, uma empresa que acredita firmemente que pagar funcionários é uma proposta de valor extraordinária.

## Sobre

Esta landing page foi criada com a qualidade visual de uma empresa grande e estabelecida, com fotografia real de escritório, tipografia impecável e textos que afirmam o absolutamente óbvio com total seriedade.

## Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Postgres** - banco da plataforma. Sem `DATABASE_URL`, o app usa um Postgres embutido em `data/pglite`
- **Vercel** - Deploy

## Conta e dados

O workspace pede login de verdade. A senha é guardada com scrypt e a sessão fica num cookie httpOnly, conferida no banco a cada acesso.

Conta de demonstração, criada na primeira subida:

- E-mail: `voce@huco.com.br`
- Senha: `salario1997`

As tarefas dessa conta ficam salvas. Email, reuniões, chat, calendário, notas e planilhas ainda são o cenário de demonstração.

Em produção, defina `DATABASE_URL` (Postgres) e `SESSION_SECRET` (pelo menos 32 caracteres). Veja `.env.example`.

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

O servidor de desenvolvimento roda em `http://localhost:3000`.

## Deploy

Este projeto está configurado para deploy na Vercel. Basta conectar o repositório e fazer o deploy.

## Estrutura

```
├── public/
│   └── images/          # Imagens do escritório e equipe
├── src/
│   └── app/
│       ├── page.tsx     # Landing page principal
│       ├── layout.tsx   # Layout com metadata
│       └── globals.css  # Estilos globais
└── package.json
```

---

**Hu.Co — Uma empresa.**
