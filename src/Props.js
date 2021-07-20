import ButtonModal from './ButtonModal';

/*
Props
Podemos passar o estado e a função de modificação como propriedades para outros elementos.
*/

const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default App;
