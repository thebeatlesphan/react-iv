import React from "react";
import { Route, Switch } from "react-router-dom";
import TitlePage from "./Landing/TitlePage/TitlePage";
import Registration from "./Registration Form/Registration";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/react-iv">
          <TitlePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
