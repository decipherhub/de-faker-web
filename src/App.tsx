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

export interface AppProps {}
export interface AppStates {}

@inject(STORE_ROUTER)
@observer
class App extends React.Component<AppProps, AppStates> {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route exact path="/" component={Home} />
          <Route path="/activities" component={ActivityContainer} />
          <Route path="/accounts" component={Accounts} />
        </div>
      </Router>
    );
  }
}

function Home() {
  return <h2>Dashboard</h2>;
}

class Account extends React.Component<RouteComponentProps<any>> {
  render() {
    return <h3>Requested Param: {this.props.match.params.id}</h3>;
  }
}

function Accounts({ match }: RouteComponentProps<any>) {
  return (
    <div>
      <h2>Accounts</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Account} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
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
        <Link to="/accounts">Accounts</Link>
      </li>
    </ul>
  );
}

export default App;
