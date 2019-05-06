import * as React from "react";
import { inject, observer } from "mobx-react";
import { RouteComponentProps } from "react-router";
import { STORE_ROUTER, STORE_DASHBOARD } from "../constants";
import { DashboardStore } from "../stores/DashboardStore";

export interface DashboardContainerProps extends RouteComponentProps<any> {
  [STORE_DASHBOARD]: DashboardStore;
}
export interface DashboardContainerState {}

@inject(STORE_DASHBOARD, STORE_ROUTER)
@observer
export class DashboardContainer extends React.Component<
  DashboardContainerProps,
  DashboardContainerState
> {
  render() {
    const dashboardStore = this.props[STORE_DASHBOARD];
    return (
      <div>
        <h2>Dashboard</h2>
        <h3>Amount In</h3>
        <p>{dashboardStore.amountIn}</p>
        <h3>Amount Out</h3>
        <p>{dashboardStore.amountOut}</p>
        <h3>Number of Transactions</h3>
        <p>{dashboardStore.numberOfTx}</p>
      </div>
    );
  }
}
