<img src="https://d33wubrfki0l68.cloudfront.net/c38c7334cc3f23585738e40334284fddcaf03d5e/2e17c/images/hugo-logo-wide.svg" alt="logo jest" width="80px" align="right">

# Shortcodes do Hugo para Modularização

Projeto feito com o intuito de automatizar a substituição de atalhos do Hugo para o formato necessário para modularização. 

## 💻 Como iniciar

1. Faça o clone do projeto
3. Abra o terminal e instale as dependências
```shell
npm i
```
4. Verifique os testes da aplicação com o comando
```shell
npm test
```
5. Inicie o script passando o `caminho do arquivo a ser substituido` e o `caminho de output após a substituição` (opcional)
```shell
npm run convert index.md
```

## ⭐ Exemplo de uso
  1. Arquivo de entrada
  ```markdown
    //index.md
  
    ## Clique no link abaixo para realizar os exercícios:
  
    {{< extlink text="Exercicios" href="https://www.exercicios.com" >}}
  
  ```
  2. Executando o script
  ```shell
  npm run convert index.md
  ```
  3. Arquivo de saída
  ```
    //index-output.md

    ## Clique no link abaixo para realizar os exercícios:

    ![Exercicios](https://www.exercicios.com)
  ```
  Note que caso o segundo argumento não seja passado, um arquivo `index-output.md` é criado com a saída esperada.


## 🔧 Conversão de Shortcodes
  Todas as substituições que este script realiza estão documentadas [neste repositório](https://github.com/betrybe/hello-summers/blob/main/modularizacao/substituicoes-de-shortcodes/_index.md).

## Feito Com:
[![IDE](https://img.shields.io/badge/Visual_studio_code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/)
[![NODE](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TYPESCRIPT](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
