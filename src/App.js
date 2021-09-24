import Nav from './components/Nav';
import './App.css';
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Start from './components/Start';
import Winners from './components/Winners';
import QuestionTwo from './components/Questiontwo';
import QuestionThree from './components/Questionthree.jsx';
import QuestionFour from './components/Questionfour.jsx';
import QuestionFive from './components/Questionfive.jsx';
import QuestionSix from './components/Questionsix.jsx';
import QuestionSeven from './components/Questionseven.jsx';
import QuestionEight from './components/Questioneight.jsx';
import QuestionNine from './components/Questionnine.jsx';
import QuestionTen from './components/Questionten.jsx';
import QuestionEleven from './components/Questioneleven.jsx';
import QuestionTwelve from './components/Questiontwelve.jsx';

function App() {
  
  return (
    <div className='App'>
      
      <div className='Home'>
        <Route exact path='/Home'>
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
        <div className = 'questiontwo'>
          < Nav />
          < Route exact path='/Questiontwo'>
            < QuestionTwo />
          </Route>
        </div>
        <div className='questionthree'>
          < Nav />
          < Route exact path='/Questionthree'>
            < QuestionThree />
          </Route>
        </div>
        <div className='questionfour'>
          < Nav />
          < Route exact path='/Questionfour'>
            < QuestionFour />
          </Route>
        </div>
        <div className='questionfive'>
          < Nav />
          < Route exact path='/Questionfive'>
            < QuestionFive />
          </Route>
        </div>
        <div className='questionsix'>
          < Nav />
          < Route exact path='/Questionsix'>
            < QuestionSix />
          </Route>
        </div>
        <div className='questionseven'>
          < Nav />
          < Route exact path='/Questionseven'>
            < QuestionSeven />
          </Route>
        </div>
        <div className='questioneight'>
          < Nav />
          < Route exact path='/Questioneight'>
            < QuestionEight/>
          </Route>
        </div>
        <div className='questionnine'>
          < Nav />
          < Route exact path='/Questionnine'>
            < QuestionNine />
          </Route>
        </div>
        <div className='questionten'>
          < Nav />
          < Route exact path='/Questionten'>
            < QuestionTen />
          </Route>
        </div>
        <div className='questioneleven'>
          < Nav />
          < Route exact path='/Questioneleven'>
            < QuestionEleven />
          </Route>
        </div>
        <div className='questiontwelve'>
          < Nav />
          < Route exact path='/Questiontwelve'>
            < QuestionTwelve />
          </Route>
        </div>
        <div className='Footer'></div>
        <Footer />
        </div>
    </div>
    
  );
}

export default App;
