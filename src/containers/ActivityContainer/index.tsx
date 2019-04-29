import * as React from "react";
import { inject, observer } from "mobx-react";
import { RouteComponentProps } from "react-router";
import { STORE_ACTIVITY, STORE_ROUTER } from "../../constants";

export interface ActivityContainerProps extends RouteComponentProps<any> {}
export interface ActivityContainerState {}

@inject(STORE_ACTIVITY, STORE_ROUTER)
@observer
export class ActivityContainer extends React.Component<
  ActivityContainerProps,
  ActivityContainerState
> {
  render() {
    return (
      <div>
        <h2>Activities</h2>
      </div>
    );
  }
}
