import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps
} from "react-router-dom";
import { ActivityContainer } from "./containers/ActivityContainer";
import { inject, observer } from "mobx-react";
import { STORE_ROUTER } from "./constants";
import { ActiveUserContainer } from "./containers/ActiveUserContainer";
import { DashboardContainer } from "./containers/DashboardContainer";

export interface AppProps {}
export interface AppStates {}

@inject(STORE_ROUTER, STORE_ROUTER)
@observer
class App extends React.Component<AppProps, AppStates> {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route exact path="/" component={DashboardContainer} />
          <Route path="/activities" component={ActivityContainer} />
          <Route path="/users" component={ActiveUserContainer} />
        </div>
      </Router>
    );
  }
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/activities">Activities</Link>
      </li>
      <li>
        <Link to="/users">Active Users</Link>
      </li>
    </ul>
  );
}

export default App;
