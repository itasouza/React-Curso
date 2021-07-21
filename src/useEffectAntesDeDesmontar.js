import React from 'react';
import Produto from './Produto2';

/*
Antes de Desmontar
As vezes precisamos executar um efeito sempre que um componente for desmontado. Para isso utilizamos um callback no retorno do callback do efeito.
*/
const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <p>Meu App</p>
      <button onClick={() => setAtivo(!ativo)}>Abrir</button>
      {ativo && <Produto />}
    </div>
  );
};

export default App;
