import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux';

import './App.css';
import CountryDisplay from './components/CountryDisplay';

import store from './redux/store'

function App() {
  return (
    <Router>
      <Provider store={store}>
    <div className="App">

      <Switch>
        <Route path="/" exact component={CountryDisplay}/>
      </Switch>

    
    </div>

    </Provider>

    </Router>
  );
}

export default App;
