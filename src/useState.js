import React from 'react';

/*
useState

Estado
O estado de uma aplicação representa as características dela naquele momento. Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato e etc.
*/
const App = () => {
  let ativo = true;

  function handleClick() {
    ativo = !ativo;
    console.log(ativo);
  }

  return (
    <button onClick={handleClick}>
      {ativo ? 'Botão Ativo' : 'Botão Inativo'}
    </button>
  );
};
export default App;
