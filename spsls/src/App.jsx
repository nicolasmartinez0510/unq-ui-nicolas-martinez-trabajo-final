import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainMenu from './Components/MainMenu'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainMenu} />
        </Switch>
      </BrowserRouter>
    </div>


  )


}
