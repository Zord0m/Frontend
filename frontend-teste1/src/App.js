import './App.css';
import Botao from './Botao';
import CartaoPerfil from './CartaoPerfil';

function App() {
  return (
    <div className="App flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-2x1 font-bold text-center">Teste Frontend de Botão</h1>
      <Botao/>
      <h2 className="mt-4 text-xl font-bold text-center">Cartão de Perfil</h2>
      <CartaoPerfil />
    </div>
  );
}

export default App;
