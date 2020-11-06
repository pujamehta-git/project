import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ViewProductComponent from './components/ViewProductComponent';
import ListProductComponent from './components/ListProductComponent';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Router>
      <div className="App"><NavigationBar/></div>
    <div className="container">
      <Switch>
        <Route path = "/" exact component ={ListProductComponent}></Route>
        
        <Route path = "/view-product/:id"  component ={ViewProductComponent}></Route>
      </Switch>    
    </div>
    
        </Router>
    </div>
  );
}

export default App;
