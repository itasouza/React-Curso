import React from 'react';

/*
useEffect
Todo componente possui um ciclo de vida. Os principais momentos acontecem quando o componente é renderizado, atualizado ou destruído. Com o React.useEffect() podemos definir um callback que irá ser executado durante certos momentos do ciclo de vida do componente.

Array de Dependências
No useEffect podemos definir dois argumentos, o primeiro é a função de callback que será executada, o segundo é uma array com uma lista de dependências. A lista de dependências serve para informarmos quando o efeito deve ocorrer.

Dependências Obrigatórias
Se utilizarmos o valor de um hook ou propriedade dentro de um efeito, ele irá indicar a necessidade de definirmos o mesmo como uma dependência na array.

*/

const App = () => {
  const [contar, setContar] = React.useState(0);
  // Uma Array vazia indica que o efeito não possui nenhum dependência,
  // assim o mesmo só irá ocorrer quando o componente é renderizado inicialmente (montado)
  // O efeito ocorre logo após a renderização do mesmo
  React.useEffect(() => {
    console.log('Apenas quando renderiza');
  }, []);

  // Antes de renderizar e toda vez que atualizar o componente
  console.log('Sempre ocorre, mas antes do useEffect');

  // Agora a dependência está no estado contar,
  // assim sempre que contar for atualizar este efeito será ativado
  React.useEffect(() => {
    console.log('Toda vez que atualiza o contar');
  }, [contar]);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default App;
