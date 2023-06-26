
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import injectContext from './state/context';
import { Home } from './views/Home';

function App() {
  const basename = process.env.BASENAME || "";
  return (
    <div className="App">
      <BrowserRouter basename={basename}>


      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>


      </BrowserRouter>
    </div>
  );
}


export default injectContext(App);