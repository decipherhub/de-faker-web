import * as React from "react";
import { inject, observer } from "mobx-react";
import { RouteComponentProps } from "react-router";
import { STORE_ROUTER, STORE_DASHBOARD } from "../../constants";

export interface DashboardContainerProps extends RouteComponentProps<any> {}
export interface DashboardContainerState {}

@inject(STORE_DASHBOARD, STORE_ROUTER)
@observer
export class DashboardContainer extends React.Component<
  DashboardContainerProps,
  DashboardContainerState
> {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }
}
