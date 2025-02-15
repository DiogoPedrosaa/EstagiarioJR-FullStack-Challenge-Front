## Desafio Estagiario Junior Front-End

Este repositório contém o projeto desenvolvido para o desafio de Estagiário JR FullStack.
A aplicação é composta por um Front que consome dados de uma API back-end desenvolvida em outro repositório: [BACKEND](https://github.com/DiogoPedrosaa/EstagiarioJR-FullStack-Challenge) <p>
O Front tem um objetivo de ser simples destacando as atividades exercidas pela SEFAZ, alem de uma lista de servidores da secretaria onde podem ser visualizado informações basicas, e caso o usuario esteja autenticado ele pode manipular essas informação, seja editando, deletando ou criando novos servidores. <p>
A Aplicação tambem conta com um sistema de Login e Cadastro de Usuario que é necessario para realizar algumas atividades dentro do sistema. <P>
O Consumo da API está configurado para o servidor back-end localhost na porta 8080, então é importante ter o back end rodando nessa porta para que a aplicação consiga consumir os dados do Back-End, caso queira alterar esse padrão pode ser feito no diretorio: \maceio-in\src\services\axios.ts

Caso ocorra algum erro ao rodar o projeto, a Localização das dependencias necessarias estão presentes no arquivo package.json presente no diretorio raiz do projeto.

## Tecnologias Utilizadas

- **Vue.js**: Utilizado no desenvolvimento do para criar interfaces de usuário reativas e componentes reutilizáveis.
- **TypeScript**: Empregado para aprimorar a tipagem da aplicação, proporcionando maior segurança e robustez ao código.
- **Router Guards**: Implementada através da verificação de tokens gerados pelo back-end durante o processo de login, garantindo que apenas usuários autenticados tenham acesso a determinadas funcionalidades.


## Executando a Aplicação ##

- Execute um git clone no repositorio.
- Navegue ate a raiz do projeto e execute no terminal: npm run serve (certifique-se de possuir o node instalado em sua maquina)
- Após isso um servidor local será gerado e a aplicação estará disponivel (Garanta que a API do back-end esteja funcional para a utilização 100% da aplicação)


