import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import BlankPage from './components/BlankPage/BlankPage';
import PateintList from './components/PateintList/PateintList';
import PateintDetails from './/components/PateintDetails/PateintDetails'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Sidebar />
        <Switch>
          <Route path='/overview'>
            <BlankPage />
          </Route>
          <Route path='/calendar'>
            <BlankPage />
          </Route>
          <Route exact path='/pateintlist'>
            <PateintList></PateintList>
          </Route>
          <Route exact path='/pateintlist/DianeCooper'>
            <PateintDetails></PateintDetails>
          </Route>
          <Route path='/message'>
            <BlankPage />
          </Route>
          <Route path='/payment'>
            <BlankPage />
          </Route>
          <Route path='/setting'>
            <BlankPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
