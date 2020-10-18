import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import Login from './components/Login/Login';
import { useStateValue } from './context/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (<Login />)
      :
      (<>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </>)}
    </div>
  );
}

export default App;
