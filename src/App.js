import './App.css';
import AppBanco from './components/app_banco/AppBanco';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Servicos from './components/servicos/Servicos';
import Sobre from './components/sobre/Sobre';
import SobreCartao from './components/sobre_cartao/SobreCartao';
import TelaInicial from './components/tela_inicial/TelaInicial';

function App() {
  return (
    <div className="App">
      <Header/>
      <TelaInicial/>
      <Servicos/>
      <Sobre/>
      <SobreCartao/>
      <AppBanco/>
      <Footer/>
    </div>
  );
}

export default App;
