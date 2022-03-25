# Marvel API
Projeto criado com o consumo de uma API pública da Marvel feito em React.
<h3>Imagens do projeto:</h3>
<img src="https://github.com/sian19/Marvel-API/blob/master/src/assets/img-projeto1.png"/>
<img src="https://github.com/sian19/Marvel-API/blob/master/src/assets/img-projeto2.png" />
<img src="https://github.com/sian19/Marvel-API/blob/master/src/assets/img-projeto3.png" />
<img src="https://github.com/sian19/Marvel-API/blob/master/src/assets/img-ptojeto4.png" />
<p>Usando uma API pública oferecida pela Marvel, eu criei esses projeto onde se tem 3 abas, onde na aba lista de heroes mostar todos os personagens que se pode consultar na API, na aba comics o usuário pode digitar na barra de pesquisa o nome de qualquer herói que se tem o nome na lista e automaticamente se aparece na tela do usuário uma lista com as informações de todos os quadrinhos no qual ele apareceu, todos os eventos, séries e estórias no qual ele fez parte, e por último e não menos importante se tem a aba characters onde se digitar o nome do herói na barra de pesquisa se aparece em tela um card contendo algumas informações do herói como uma imagem dele, nome, descrição e sua biografia.</p>
<br/>
<h3>Oque foi usado no desenvolvimento da aplicação:</h3>
<ul>
  <li>O projeto foi desenvolvido usando componentes funcionais para renderiza-los em tela.</li>
  <li>Se usou hooks para trabalhar estados da aplicação, ciclos de vida e gerenciamento de estados globais.</li>
  <li>O uso de contextAPI foi essencial para fazer o gerenciamento do estado que recebeu a API e foi responsável para passar todas as informações da API para os outros componentes.</li>
  <li>Os estados contendo as cores dos links do menu também foram gerenciados globalmente pelo contextAPI para que tanto o menu mobile e o menu desktop sejam alterados também de forma conjunta.</li>
  <li>Se criou condições no componente que recebe o resultado da busca do usuário onde se usando como base um estado(selector) para fazer com que se renderize em tela o componente no qual se está as informações do herói, exemplo, se o usuário está na aba comics e fazer uma busca o estado selector receberá o valor de 2 e em seguida será redirecionado para um componente que contém os dados dos quadrinhos no qual o usuário deseja ver.</li>
  <li>Se usou styled-components para estilizar de forma individual alguns componentes para evitar entrar em conflito com outros componentes estilizados com css padrâo.</li>
</ul>
<h3>Link do projeto:</h3>
<a href="https://marvel-api22.netlify.app/">clique aqui<a>
