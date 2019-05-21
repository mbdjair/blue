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
