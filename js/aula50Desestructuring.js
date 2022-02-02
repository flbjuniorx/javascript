/*
Atribuição por desestruturação

Extrai elementos de um array ou objeto para variáveis/constantes distintas
*/

function getVencedoresTorneio() {
    return [
        { id: 1, nome: 'Tiago' },
        { id: 2, nome: 'Pedro' },
        { id: 3, nome: 'Maria' },
        { id: 4, nome: 'José' }
    ];
}

  const notifica = (...nomes) => console.log (
    `vencedores do torneio:\n%s`,
    nomes.map((v, k) => `${++k}º lugar - ${v}`).join('\n')
  );

  const [ usuarioA, usuarioB, usuarioC ] = getVencedoresTorneio();

  notifica(usuarioA.nome, usuarioB.nome, usuarioC.nome);
  // vencedores do torneio:
  // 1º lugar - Tiago
  // 2º lugar - Pedro

  const [ val1, ,val2, ...val3 ] = [ 10, 20, 30, 40, 50, 60, 70]

  console.log(val1) // 10
  console.log(val2) // 30 (pulou o 2º valor)
  console.log(val3[3]) // [ 40, 50, 60 ]

  /* Atribuição por desestruturação (objetos) */

  const pessoa = {
    nome: 'Fernando',
    sobrenome: 'Junior',
    idade: 39,
    endereco: {
      cidade: 'Brasilia',
      estado: 'Distrito Federal'
    }
  };

  console.log(pessoa);

  // 1ª opção: método get

  console.log(pessoa.nome);

  // 2ª opção: atribuição

  name = pessoa.nome;
  console.log(name);

  // 3ª opção: desestruturação

  const { firstName } = pessoa; // uma variável
  console.log(firstName);

  const { nome, sobrenome } = pessoa; // duas variáveis
  console.log(nome, sobrenome);

  const { nome: n = '', sobrenome: s = '' } = pessoa; // Chave - valor
  console.log(n, s);

  const { endereco: {cidade, estado} } = pessoa; // Desestruturação da classe aninhada
  console.log(`${cidade} - ${estado}`);