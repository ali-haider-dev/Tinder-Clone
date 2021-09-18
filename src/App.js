import './App.css';
import Header from './components/header';
import Card from './components/card';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">

            </Route>
            <Route path="/chat">
              <h1>i am chat page</h1>

            </Route>
            <Route path="/">
              {/* Header */}
              <Header />
              <Card />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;


{/* tinder-Cards */ }
{/* button below the card */ }
{/* chat Screen */ }
{/* individual chatDcreen */ }