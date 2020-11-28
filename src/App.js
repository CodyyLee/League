import './styles/Reset.scss';
import './styles/General.scss';

import { Route } from 'react-router-dom';

import { useState } from 'react';

import Search from './components/search/Search';
import Champions from './components/champions/Champions';
import Champ from './components/champ-page/Champ';

function App() {

  const [name, setName] = useState("");
  const [champion, setChampion] = useState(true);

  const championSet = e => {
    if(e.target.id === 'champion') {
      setChampion(true);
    } else {
      setChampion(false);
    }
  }

  return (
    <div className="App">
      <div className='container'>
        {/* Search form */}
        <Route exact path='/' render={() => {
          return (
            <>
              <h1 className='header'>Some Page Title</h1>
              <button id='champion' onClick={championSet}>Champions</button>
              <button id='player' onClick={championSet}>Players</button>
              <Search name={name} setName={setName} champion={champion}/>
            </>
          )
        }}/>
        
        {/* Champion list */}
        {champion ? <Route exact path='/' render={(props) => {
          return <Champions {...props} champion={champion} name={name}/>
        }}/> : null}
        
        {/* Champion Page */}
        <Route path='/:name' render={(props) => {
          return <Champ {...props}/>
        }}/>
      </div>
    </div>
  );
}

export default App;
