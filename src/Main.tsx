import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps
} from "react-router-dom";
import { inject, observer } from "mobx-react";
import { STORE_ROUTER } from "./constants";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import {
  LandingPageContainer,
  ActivityContainer,
  ActiveUserContainer,
  DashboardContainer
} from "./containers";

export interface MainProps extends RouteComponentProps<any> {}
export interface MainStates {}

@inject(STORE_ROUTER)
@observer
class Main extends React.Component<MainProps, MainStates> {
  render() {
    const match = this.props.match;
    const contractAddress = match.params.contractAddress;
    return (
      <Container>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Contract Address"
            aria-label="Contract Address"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="primary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
        <h1>{contractAddress}</h1>
        <Header {...this.props} />
        <Route
          exact
          path={`/c/:contractAddress/`}
          component={DashboardContainer}
        />
        <Route
          path={`/c/:contractAddress/activities`}
          component={ActivityContainer}
        />
        <Route
          path={`/c/:contractAddress/users`}
          component={ActiveUserContainer}
        />
      </Container>
    );
  }
}

function Header({ match }: { match: RouteComponentProps["match"] }) {
  return (
    <ul>
      <li>
        <Link to={`${match.url}`}>Dashboard</Link>
      </li>
      <li>
        <Link to={`${match.url}/activities`}>Activities</Link>
      </li>
      <li>
        <Link to={`${match.url}/users`}>Active Users</Link>
      </li>
    </ul>
  );
}

export default Main;
