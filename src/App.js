import './App.css';
import NavBar from './components/NavBar';
import WelcomMessage from './components/WelcomMessage';
import ItemListContainer from './components/ItemListContainer';

function App() {

  /*Renderizado*/
  return (
    <>
      <header><NavBar/></header>
      <main>
        <ItemListContainer/>
        <hr></hr>
        <WelcomMessage/>   
      </main>
    </>
  )

}
export default App;