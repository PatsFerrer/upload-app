# 📸 Upload de Imagem - Mini Projeto de teste com Cloudinary e Prisma

Este é um mini projeto Node.js que permite fazer upload de imagens usando um formulário HTML simples. As imagens são enviadas diretamente para o **Cloudinary**, enquanto os dados do usuário (nome e URL da imagem) são salvos em um banco de dados **SQLite** com o auxílio do **Prisma ORM**.

## ✨ Funcionalidades

- Upload de imagem via formulário HTML
- Armazenamento automático no Cloudinary
- Salva nome e URL da imagem no banco SQLite
- Visualização da imagem enviada logo após o upload

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Multer](https://github.com/expressjs/multer)
- [Cloudinary](https://cloudinary.com/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)
- [dotenv](https://github.com/motdotla/dotenv)

## 📦 Instalação e Uso

### 1. Clone o projeto

```bash
git clone https://github.com/PatsFerrer/upload-app.git
```

### 2. Instale as dependências

```bash
npm install --legacy-peer-deps
```

⚠️ Use `--legacy-peer-deps` para evitar conflitos de versões entre `cloudinary` e `multer-storage-cloudinary`.

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` com base no `.env.example`:

```env
CLOUDINARY_CLOUD_NAME=seu_cloud_name
CLOUDINARY_API_KEY=sua_api_key
CLOUDINARY_API_SECRET=sua_api_secret
DATABASE_URL="file:./dev.db"
```

Para obter essas chaves:

1. Crie uma conta gratuita no [Cloudinary](https://cloudinary.com/users/register_free).
2. No painel da conta, vá em "Dashboard" e copie os valores do `cloud_name`, `api_key` e `api_secret`.

### 4. Configure o Prisma

Execute os comandos abaixo para gerar o client e aplicar as migrações:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

Isso criará o arquivo `dev.db` e aplicará o schema definido em `schema.prisma`.

Para visualizar seu banco de dados e verificar se a tabela foi criada corretamente, você pode usar o Prisma Studio:

```bash
npx prisma studio
```

### 5. Inicie o servidor

```bash
npm start
```

Acesse `http://localhost:3001` e envie uma imagem pelo formulário!

## 🗂 Estrutura do Projeto

```pgsql
📁 upload-app
├── 📁 prisma
│   ├── migrations/
│   └── schema.prisma
├── 📁 public
│   └── index.html
├── 📄 index.js
├── 📄 upload.js
├── 📄 package.json
├── 📄 .env.example
└── 📄 README.md

```

## 🧠 Observações

- As imagens enviadas para o Cloudinary são públicas por padrão. Se você ver imagens que não são suas, pode ser:

  - Porque o mesmo nome de pasta (usuarios) está sendo usado por outras contas com plano gratuito;

  - Ou porque sua conta está configurada como pública. No Cloudinary, todas as imagens ficam acessíveis por URL se você souber o link direto.

- Caso queira mais privacidade, use configurações avançadas do Cloudinary (como autenticação de URLs ou pastas privadas).

## 🛠 Comandos Úteis Prisma

Durante o desenvolvimento, você pode precisar destes comandos:

- **Gerar o Prisma Client** (após alterações no `schema.prisma`):

  ```bash
  npx prisma generate
  ```

- **Criar uma nova migração** (após alterar o schema e quiser aplicar as mudanças ao banco):

  ```bash
  npx prisma migrate dev --name nome_descritivo_da_migration
  ```

- **Abrir o Prisma Studio** (para visualizar e gerenciar os dados no banco):

  ```bash
  npx prisma studio
  ```

- **Aplicar migrações pendentes em produção (exemplo):**

  ```bash
  npx prisma migrate deploy
  ```

  _(Nota: Para este projeto, `migrate dev` é usado, mas `deploy` é o comando para ambientes de produção)._

- **Resetar o banco de dados** (cuidado, apaga todos os dados!):
  ```bash
  npx prisma migrate reset
  ```

## 👩‍💻 Autora

Projeto desenvolvido por [Patricia Ferrer](https://patsferrer.github.io/links/), como material de estudo e referência pessoal para uploads de arquivos em aplicações Node.js.
