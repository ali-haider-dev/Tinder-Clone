import './App.css';
import Header from './components/header';
import Card from './components/card';
import SwipeButtons from './components/SwipeButtons';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Chats from './components/chats';
import ChatScreen from "./components/chats/chatScreen"

function App() {
  return (
    <div className="App">
      <Router>
        <div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>

            <Route path="/chat/:person">
              <Header backButton="/chat" />
              <ChatScreen />
            </Route>
            <Route path="/chat">

              <Header backButton="/" />
              <Chats />

            </Route>
            <Route path="/">
              {/* Header */}
              <Header />

              <Card />
              <SwipeButtons />

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