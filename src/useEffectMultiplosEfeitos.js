import React from 'react';

/*
Múltiplos Efeitos
Podemos ter diversos useEffect no nosso código. O ideal é separarmos efeitos diferentes em useEffect diferentes.
*/

const App = () => {
  const [contar, setContar] = React.useState(0);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Total ' + contar;
  }, [contar]);

  React.useEffect(() => {
    setContar(0);
  }, [modal]);

  return (
    <div>
      {modal && <p>Meu Modal</p>}
      <button onClick={() => setModal(!modal)}>Modal</button>
      <hr />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
