import Nav from './components/Nav';
import './App.css';
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Start from './components/Start';
import Winners from './components/Winners';



function App() {
  
  return (
    <div className='App'>
      
      <div className='Home'>
        <Route path='/Home'>
          <Home />
          < Nav />
        </Route>
      <div className='Winners'>
          <Route path='/Winners'>
            < Winners />
        </Route>
      </div>
      <div className= 'Start'>
        < Nav />
          <Route path= '/Start'>
          < Start />
          < Nav />
          </Route>
        </div>
        <div className='Footer'></div>
        <Footer />
        </div>
    </div>
    
  );
}

export default App;
