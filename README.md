# Site Criado para a realização do Projeto integrador Utilizando o MicroFramework React feito através do Bootcamp da Generation Brasil 📖🟢


  ## ✔️ Técnicas e tecnologias utilizadas

- ``React``
- ``Typescript``
- ``Html``
- ``CSS``
- ``Netlify``
- ``Heroku``
- ``Swagger``


 #### ✅ - Consumo da api Sustech
 * Link da api no heroku https://sus-tech.herokuapp.com/swagger-ui/index.html#/
 * Foi criada uma camada de service onde realizamos a Integração com a api
 1. Cadastro usuario utilizando a requisição Post
 2. Login usuario utilizando a requisição Post
 3. Busca utilizando o metodo get de forma generica em todo o site
 
 
 
 #### ✔️ - Criação dos Components
 * Component de navbar para a criação do cabeçalho da pagina e navbar
 * Component de footer para criar o rodapé da pagina e as informações do site
 * Component de Formulario de Categoria, onde ira verificar se a categoria ja existe para realizar um metodo Put para Atulizar a categoria ou se ele não existe para criar um metodo Post e gerar uma nova categoria
 * Component de deletar Categoria utilizando o metodo Delete
 * Component de listar todas as  categorias utilizando o metodo Get
 * Component de Formulario de  Produto onde ira verificar se o Produto ja existe para criar um metodo Put para atulizar o Produto ou um metodo Post para criar um novo Produto
 * Component Modal Produto que é utilizado para criar um modelo base da pagina de postagens que é utilizado na pagina Produtos e tambem na pagina home
  
   
 #### ✅ - Utilização do site
 * O usuario logo ao abrir a pagina ja ira ver a pagina de login caso tenha uma conta ele ja ira poder entra no site caso não ele podera se cadastrar
 * O usuario faz o cadastro colocando suas informações utilizando um metodo  post e logo ja é gerado uma criptografia dos seus dados para serem armazenados no banco de dados
 * Logo que o usuario faz o login na pagina ele recebera um token unico que permitira que ele utilize o site e possa criar temas e novas postagens
 * Esse token tem uma validade de 30 minutos
 * Logo que esse token expire o usuario sera redirecionado para a pagina de login para que possa se autenticar novamente
 
  #### ✅ - Utilização do site - 2 
 * Existem dois tipos de usuarios, os compradores/vendedores e os administradores
 * Os usuarios normais podem fazer o cadastro de um novo produto para venda, e tambem comprar , mas nao tem acesso na seção de categorias 
 
 
  
 #### 🔨 - A realização dos testes foram feitas todas no insominia
 * Testes dos endpoints Get de Categoria/Produto/Usuario
 * Testes dos endpoints GetbyId de Categoria/Produto/Usuario
 * Testes dos endpoints Post de Categoria/Produto/Usuario 
 * Testes dos endpoints Put de Categoria/Produto/Usuario 
 * Testes dos endpoints Delete de Categoria/Produto/Usuario
 
  #### 🔨 - Integração do swagger para deploy na plataforma heroku
 * Foi Criada uma camada na aplicação fazendo a configuração do swagger com os endpoints
 * Foi feito o deploy da api Utilziando a plataforma do heroku, onde disponibilizamos em nuvem para fazer o consumo posteriormente na etapa de front-end
 
  ##### 🔨 - Link da aplicação no heroku e instruções para entrar
  1. - Entre no link https://sus-tech.herokuapp.com/swagger-ui/index.html#/
  2. - Vai abrir uma aba pedindo login e senha
  3. - Coloque o login como root e senha como root
  
  
  #### 🔨 - Demonstrativo dos endpoits de usuario na plataforma do swagger
  ![image](https://user-images.githubusercontent.com/100168699/202008453-9f07e5f8-8398-4254-966d-1ce7a27ad749.png)


  ##### 🔨 - Demonstrativo dos endpoits de Tema na plataforma do swagger
 ![image](https://user-images.githubusercontent.com/100168699/202008499-e4f024d8-34b4-4188-9548-e43f33b60a1c.png)
  
  ##### 🔨 - Demonstrativo dos endpoits de Postagens na plataforma do swagger
  
![image](https://user-images.githubusercontent.com/100168699/202008565-742fc26e-a2b0-4a4c-8eed-4bc537256166.png)

  ##### 🔨 - Link do site ja funcionando e feito o deploy pela plataforma do netlify
  https://luxury-parfait-6f6d5e.netlify.app/
 

 # 🎨 Desenvolvido por:
* 👨 ``Matheus Rodrigues``
* 👩 ``Danyele Amarante``
* 👨 ``Gustavo Santos``
* 👩 ``Yasmin Diba``
* 👨 ``Cleverson Mendes``
* 👩 ``Twani Teixeira``
* 👨 ``Lucas Pereira``
 
 
🎁 Obrigada @Generation pelos aprendizados nessa trilha 
