import './App.css';
import AgregarUsuario from './components/AgregarUsuario';
import EditarUsuario from './components/EditarUsuario';
import ListaUsuarios from './components/ListaUsuarios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBarCrud from './components/NavBarCrud';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarCrud/>}>
              <Route index element={<ListaUsuarios/>}/>
              <Route path='/agregarusuario' element={<AgregarUsuario/>}/>
              <Route path='/editarusuario/:idusuario' element={<EditarUsuario/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
