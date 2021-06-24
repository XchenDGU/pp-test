import React from "react";
import RoomPage from './components/RoomPage';
import NavBar from './components/NavBar';
import { Route, Switch } from "react-router-dom";;


export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={RoomPage}/>
        </Switch>
      </div>
    </React.Fragment>
  );
}

//export default App;
