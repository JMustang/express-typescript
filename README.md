# Tutorial Passo-a-passo de TypeScript e Express.js

- O comando abaixo vai criar o diretório do projeto e metrando na pasta.

```bash
 mkdir nome-do-projeto && cd nome-do-projeto

```

- O comando abaixo inicia o package.json

```bash
npm init -y

# a flag '-y' aceita todas as perguntas do package.json

```

- O comando abaixo instala a biblioteca do TypeScript ao projeto

```bash
npm i -D typescript
# A flag '-D' instala qualquer biblioteca como dependência de desenvolvimento

```

- O comando abaixo instala a biblioteca do Express no projeto

```bash
npm i express
# Vamos adicionar também as tipagens para o express
npm i -D @types/express

```

- Crie um novo diretório chamado "src"

```bash
mkdir src
```

- Crie também um arquivo dentro do diretório "src" chamado 'index.ts'.

```bash
touch index.ts
```

- No arquivo 'index.ts', vamos adicionar o seguinte código:

```bash
import express from "express";

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Running on port ${port}`)
```

- Vamos iniciar o arquivo do **tsconfig.json**, com um comando bem simples:

```bash
npx tsc --init
```

- No arquivo **tsconfig.json**, vamos descomentar a linha onde tem o comando **"rootDir": "./"** e vamos adicionar **src** apos a barra, **"rootDir": "./src"**.

- Vamos adicionar também o comando **"outDir": "./"**, e adicionar dist a o path, o nome do diretório pode ser o que voce quiser, mas o de senso comum seria 'dist'.
  **"outDir": "./dist"**.

- Futuramente, usaremos mais esse arquivo, por hora ja basta.
