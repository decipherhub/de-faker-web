import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps
} from "react-router-dom";
import { inject, observer } from "mobx-react";
import { STORE_ROUTER } from "./constants";
import { Container } from "react-bootstrap";
import {
  LandingPageContainer,
  ActivityContainer,
  ActiveUserContainer,
  DashboardContainer
} from "./containers";
import Main from "./Main";

export interface AppProps {}
export interface AppStates {}

@inject(STORE_ROUTER, STORE_ROUTER)
@observer
class App extends React.Component<AppProps, AppStates> {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPageContainer} />
          <Route path="/c/:contractAddress" component={Main} />
        </div>
      </Router>
    );
  }
}

export default App;
