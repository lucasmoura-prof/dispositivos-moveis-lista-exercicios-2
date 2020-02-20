## Programação Para Dispositivos Móveis

Lista 2 de exercícios da disciplina "Programação para Dispositivos Móveis".


## Enviando as soluções dos exercícios

1. Faça o Fork desse repositório conforme ensinado na primeira aula;
2. Faça o clone do repositório que foi criado no seu **perfil** após o Fork, na sua máquina;
3. Dentro da pasta "src", crie uma nova pasta com o seu nome. Caso o seu primeiro nome não seja único na turma, adicioanr também um sobrenome. Ex: ./src/LucasMoura
4. Dentro da pasta criada,  adicione todo os arquivos relacionados à resolução dos exercícios dessa lista.
5. Após conclúida, faça o envio dos commits com o comando push. Obs: você deverá fazer os commits e o push no repositório que está na sua conta do GitHub, criado através do botão Fork.
6. Após confirmar os commits, faça uma "Pull request" do seu repositório selecionando o repositório original como destino. Informar o nome completo do aluno na descrição da PR (pull-request).

## Exercícios

1- Crie um script que irá conter um vetor de objetos chamado `players`, esse vetor dever conter 5 players definidos. Faça os seguintes passos para manipular esse vetor (usando as funções de vetor):
Adicione 2 players no final do vetor;
Remova o primeiiro players do vetor;
Imprima os players no console.
Remova o último player do vetor;
Adicione um players no início do vetor;
Imprima o vetor;  

2. Usando o script do exercicio anterior, procure um player a partir do Id. Caso exista, imprima a mensagem que ele foi encontrado em um determinado indice. Adicione também um código que irá buscar um player por outra propriedade (não será id), e imprima o atributo caso o jogador encontrado seja válido. 


3- Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 5
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch
Deverá imprimir a mensagem "Maior que 18" caso a promise retorne um resultado positivo.
Deverá imprimir a mensagem "Menor que 18" caso a promise retorne um resultado negativo.

Retorne o seguinte conteúdo:
`A pessoa mora em Ituiutaba-MG, no bairro Centro, na rua "Rua Vinte e Dois", número 1239.`

4- Crie um script que recebe o nome de um usuário no Github. Após digitar o
nome do usuário, deverá buscar pela API do Github (conforme URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
`https://api.github.com/users/lucasmoura-prof/repos`
A url acima retorna os reositórios do usuário `lucasmoura-prof`, o script deverá consular a API com o usuário digitado.

Após fazer a requisição na API, deverá imprimir no console os nomes de todos os repositórios desse usuario:

Ex:

```javascript
Repositórios desse usuário:
aula-dispositivos-moveis
aula1-javascript
dispositivos-moveis-lista-exercicios-1
dispositivos-moveis-lista-exercicios-2
```

5- A partir do resultado do exemplo anterior adicione uma mensagem "Carregando..." indicando o carregamento. Ao carregar, deverá imprimir a mensagem no console "Carregado" antes das mensagens do exercício anterior.
Além disso, adicione uma mensagem de erro no console caso o usuário no Github não exista.

Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.

```javascript
function temHabilidade(skills) {
	// Implementação
}
var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills)); // true ou false
```
Dica: para verificar se um vetor contém um valor, utilize o método indexOf.

