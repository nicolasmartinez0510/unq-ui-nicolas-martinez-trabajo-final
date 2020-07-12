import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainMenu from './Components/MainMenu'
import 'bootstrap/dist/css/bootstrap.min.css';
import OneVsPC from './Components/OneVsPC';
import OneVsOne from './Components/OneVsOne';



export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainMenu} />
            <Route exact path= '/onevscom' component={OneVsPC}/>
            <Route exact path= '/onevsone' component={OneVsOne}/>
        </Switch>
      </BrowserRouter>
    </div>


  )


}
