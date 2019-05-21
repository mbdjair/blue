# Blue
App que possibilita a votação de empreendimentos cadastrados, por usuários autenticados

## Configuração
Possuir o docker-compose instalado na versão 1.6 ou superior

### Clonar o repositorio
```bash
$ git clone https://github.com/mbdjair/blue
```
 ### Executar docker
 ```bash
 $ docker-compose up
 ```

 App será executado em `localhost:4200`

 ## Stack tecnológica
 * Front-end: Angular
 	* Um dos frameworks mais difundidos para front-end, sendo bem documentada e possuindo uma grande comunidade
 	* Facilidade de componentização e modularização, o que aumenta a manutenabilidade (testabilidade), escalabilidade e reutilização de código
 * Back-end: Express.js
 	* Desenvolvimento rápido
 	* Ideal para lidar com grande número de requisições
 * Banco: Mongo
 	* Banco orientado a objeto, possibilitando uma integração mais simples com o back-end
 	* Grande gama de querys
 	* Alta disponibilidade

## Arquitetura

### Front-end

![](https://github.com/mbdjair/blue/blob/master/assets/front-architecture.jpg)

### Back-end

![](https://github.com/mbdjair/blue/blob/master/assets/express-rest-api.png)

## Implantação

* Uso do docker para montar imagens para Server, e Client baseados em node:10-alphine (Imagem oficial)
* Uso do docker-compose para construir/baixar as imagens e orquestrar os containers

## Fluxos da Aplicação

### Autenticação

#### Front-end

* Verifica se existe um token, se sim verifica se o token está expirado, se não o usuário já está autenticado
* Verifica se existe um token, se sim verifica se o token está expirado, se sim utiliza refresh_token para se obter um novo token e permanecer autenticado
* Verifica se existe um token, se não verifica se possui um usuário(login, senha), se sim envia o usuário para gerar o token, se usuário válido o token é gerado e usuário é autenticado
* Verifica se existe um token, se não verifica se possui um usuário(login, senha), se sim envia o usuário para gerar o token, se usuário não é válido o token não é gerado e usuário é não autenticado

#### Back-end

* Qualquer end-point
    * Se receber um token, verifica se é valido , se sim prossegue com a requisição, se não retorna 401, se não possuir token retorna 403
* End-point de refresh_token
    * Se receber um refresh_token, verifica se é valido , se sim retorna um novo token a response, se não retorna 401, se não possuir refresh_token 403
* End-point de Authentication
    * Se receber um usuário(login,senha), verifica se login existe, verifica se senha corresponde, se sim retorna um novo token a response, se não da falha de autenticação

### Votação

#### Front-end

* Exibe lista de empreendimentos, objetos que contendo, id, nome, imagem
* Possibilita a votação caso não tenho votado

#### Back-end

* Se enviado voltingId pega do mongo innerlist 'Volting.Developments' e envia no response
* Se enviado voltingId e Usuário.login e Developments.id verifica se usuário esta dentro de 'Volting.Users' se não adicina e adiciona a 'Volting.Developments.Users', se sim envia 403

### Status da votação 

#### Back-end

* Se enviado voltingId pega do mongo innerlist 'Volting.Developments' e exibe (em conjutnto com 'Volting.Developments.Users', usuários que votaram no empreendimento e 'Volting.Users', todos os usuários que participaram)
