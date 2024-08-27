import React, {useState} from 'react';
import './App.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Main from '../Main/Main'
import Footer from '../Footer/footer';
function App() {
  const [state, setState] = useState()
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
