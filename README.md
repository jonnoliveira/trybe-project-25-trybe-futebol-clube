# PROJETO 25 - TRYBER FUTEBOL CLUBE :computer:

## Esse projeto foi desenvolvido com intuido de conseguir aprovação final no módulo de `back-end` do curso da Trybe :green_heart:

### Stacks utilizadas no desenvolvimento:
<div style="display: inline_block"><br>
  <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Shield" />
  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL Shield" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS Shield" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="ExpressJS Shield" />
  <img src="https://img.shields.io/badge/Sequelize-6888A1?style=for-the-badge&logo=sequelize&logoColor=blue" alt="Sequelize Shield" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="JWT Shield" />
  <img src="https://img.shields.io/badge/Typescript-2CA5E0?style=for-the-badge&logo=Typescript&logoColor=white" alt="Typescript Shield" />
  <img src="https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white" alt="Mocha Shield" />
  <img src="https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white" alt="Chai Shield" />
  <img src="https://img.shields.io/badge/Sinon-2EE5E0?style=for-the-badge&logo=Sinon" alt="Sinon Shield" />
</div>
 
 #
<details>
 
<summary>
  
## 1- Resumo
  
</summary>

O TFC é um projeto Full-Stack e consta de um site informativo sobre partidas e classificações de futebol que é alimentado por uma APIRest dockerizada.

• Nesse projeto construí um Back-end encapsulado por Docker utilizando modelagem de dados através do Sequelize.

• Com a utilização da biblioteca de criptografia bcryptjs gerenciei o status de acesso dos usuários, já que apenas pessoas autorizadas poderiam realizar alterações nas informações a serem enviadas para o Front-end.

• O Back-end foi montado utilizando conceitos de TypeScript e suas características como classe, herança, composição e polimorfismo. Tudo foi tipado para melhor compreensão e segurança no código.

• Por fim os testes foram realizados com ajuda do Mocha, Chai e Sinon.

Foram utiizados conceitos intrínsecos a Docker, SQL e suas funções, Node.JS, Arquitetura de Software (MSC), Mapeamento objeto-relacional (ORM) e Autenticação, TypeScript, Programação Orientada a objetos (POO) e SOLID.
  
Veja mais abaixo!
  
</details>

#

<details>
 
<summary>
 
## 2- Requisitos

</summary>

* I. Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de times
* II. (TDD) Desenvolva testes que cubram no mínimo 5 por cento dos arquivos em /app/backend/src, com um mínimo de 7 linhas cobertas
* III. Desenvolva o endpoint /teams no back-end de forma que ele possa retornar todos os times corretamente
* IV. (TDD) Desenvolva testes que cubram no mínimo 10 por cento dos arquivos em /app/backend/src, com um mínimo de 19 linhas cobertas
* V. Desenvolva o endpoint /teams/:id no back-end de forma que ele possa retornar dados de um time específico
* VI. Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de pessoas usuárias
* VII. (TDD) Desenvolva testes que cubram no mínimo 15 por cento dos arquivos em /app/backend/src, com um mínimo de 25 linhas cobertas
* VIII. Desenvolva o endpoint /login no back-end de maneira que ele permita o acesso com dados válidos no front-end
* IX. (TDD) Desenvolva testes que cubram no mínimo 20 por cento dos arquivos em /app/backend/src, com um mínimo de 35 linhas cobertas
* X. Desenvolva o endpoint /login no back-end de maneira que ele não permita o acesso com um email não cadastrado ou senha incorreta no front-end
* XI. (TDD) Desenvolva testes que cubram no mínimo 30 por cento dos arquivos em /app/backend/src, com um mínimo de 45 linhas cobertas
* XII. Desenvolva um middleware de validação para o token, verificando se ele é válido, e desenvolva o endpoint /login/role no back-end de maneira que ele retorne os dados corretamente no front-end
* XIII. Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de partidas
* XIV. (TDD) Desenvolva testes que cubram no mínimo 45 por cento dos arquivos em /app/backend/src, com um mínimo de 70 linhas cobertas
* XV. Desenvolva o endpoint /matches de forma que os dados apareçam corretamente na tela de partidas no front-end
* XVI. Desenvolva o endpoint /matches de forma que seja possível filtrar somente as partidas em andamento, e também filtrar somente as partidas finalizadas, na tela de partidas do front-end
* XVII. Desenvolva o endpoint /matches/:id/finish de modo que seja possível finalizar uma partida no banco de dados
* XVIII. Desenvolva o endpoint /matches/:id de forma que seja possível atualizar partidas em andamento
* XIX. (TDD) Desenvolva testes que cubram no mínimo 60 por cento dos arquivos em /app/backend/src, com um mínimo de 80 linhas cobertas
* XX. Desenvolva o endpoint /matches de modo que seja possível cadastrar uma nova partida em andamento no banco de dados
* XXI. Desenvolva o endpoint /matches de forma que não seja possível inserir uma partida com times iguais nem com um time que não existe na tabela de times
* XXII. (TDD) Desenvolva testes que cubram no mínimo 80 por cento dos arquivos em /app/backend/src, com um mínimo de 100 linhas cobertas
* XXIII. Desenvolva o endpoint /leaderboard/home de forma que retorne as informações do desempenho dos times da casa com as seguintes propriedades: name, totalPoints, totalGames, totalVictories, totalDraws, totalLosses, goalsFavor e goalsOwn
* XXIV. Desenvolva o endpoint /leaderboard/home de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end com os dados iniciais do banco de dados, incluindo as propriedades goalsBalance e efficiency, além das propriedades do requisito anterior
* XXV. Desenvolva o endpoint /leaderboard/home de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end, e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional
* XXVI. Desenvolva o endpoint /leaderboard/away de forma que retorne as informações do desempenho dos times visitantes com as seguintes propriedades: name, totalPoints, totalGames, totalVictories, totalDraws, totalLosses, goalsFavor e goalsOwn
* XXVII. Desenvolva o endpoint /leaderboard/away, de forma que seja possível filtrar as classificações dos times quando visitantes na tela de classificação do front-end, com os dados iniciais do banco de dados, incluindo as propriedades goalsBalance e efficiency, além das propriedades do requisito anterior
* XXVIII. Desenvolva o endpoint /leaderboard/away de forma que seja possível filtrar as classificações dos times quando visitantes na tela de classificação do front-end e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional
* XXIX Desenvolva o endpoint /leaderboard de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end com os dados iniciais do banco de dados
* XXX. Desenvolva o endpoint /leaderboard de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Flamengo 3 X 0 Napoli-SC
  
</details>

# 

<details>
 
<summary>

## 3- Nota do Projeto
 
</summary>

## 100% :heavy_check_mark:

![Project-tfc-grade](https://github.com/jonnoliveira/trybe-project-25-trybe-futebol-clube/blob/main/images/tfc-grade.png)

</details> 
 
# 

<details>
 
<summary>

## 4- Preview
 
</summary>

![Project-tfc-preview-1](https://github.com/jonnoliveira/trybe-project-25-trybe-futebol-clube/blob/main/images/tfc-preview-1.png)
![Project-tfc-preview-2](https://github.com/jonnoliveira/trybe-project-25-trybe-futebol-clube/blob/main/images/tfc-preview-2.png)
![Project-tfc-preview-3](https://github.com/jonnoliveira/trybe-project-25-trybe-futebol-clube/blob/main/images/tfc-preview-3.png)
![Project-tfc-preview-4](https://github.com/jonnoliveira/trybe-project-25-trybe-futebol-clube/blob/main/images/tfc-preview-4.png)

</details> 
 
# 
