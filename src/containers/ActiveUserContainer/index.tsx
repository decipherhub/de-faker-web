import * as React from "react";
import { inject, observer } from "mobx-react";
import { RouteComponentProps } from "react-router";
import { STORE_ROUTER, STORE_ACTIVE_USER } from "../../constants";

export interface ActiveUserProps extends RouteComponentProps<any> {}
export interface ActiveUserState {}

@inject(STORE_ACTIVE_USER, STORE_ROUTER)
@observer
export class ActiveUserContainer extends React.Component<
  ActiveUserProps,
  ActiveUserState
> {
  render() {
    return (
      <div>
        <h2>Active Users</h2>
      </div>
    );
  }
}
