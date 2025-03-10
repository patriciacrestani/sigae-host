# SIGAE Open Source - Host Microfrontend

Este repositório contém a aplicação host do projeto SIGAE, que utiliza a abordagem de microfrontends para modularização da interface.

## Tecnologias Utilizadas

- **Angular 19** (Standalone)
- **Native Federation 19**
- **PrimeNG**
- **Primeicons**
- **Tailwind**
- **MSW**

## Configuração e Execução

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/patriciacrestani/sigae-host.git
   cd sigae-host
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Estabeleça o link com o repositório _sigae-autenticacao_**
   ```sh
   npm link autenticacao
   ```

4. **Inicie a aplicação:**
   ```sh
   npm start
   ```
   A aplicação estará disponível em `http://localhost:4200`.

## Configuração dos Microfrontends

A aplicação host consome microfrontends que são carregados dinamicamente. Certifique-se de que o arquivo `federation.manifest.json` está corretamente configurado com as URLs dos remotes.

Exemplo de configuração:
```ts
{
    "plano-acao": "http://localhost:4201/remoteEntry.json",
    "cadastros": "http://localhost:4202/remoteEntry.json"
}
```

## Contribuição

1. Fork o repositório.
2. Crie uma branch para sua feature.
3. Realize as modificações e commit.
4. Envie um Pull Request.

## Licença

Este projeto está sob a licença MIT.
