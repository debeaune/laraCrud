import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ShowClient from './components/ShowClient';
import CreateClient from './components/CreateClient';
import EditClient from './components/EditCLient';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowClient/>} />
          <Route path='/create' element={<CreateClient/>} />
          <Route path='/edit:id' element={<EditClient/>} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
