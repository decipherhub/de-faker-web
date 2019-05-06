import * as React from "react";
import { inject, observer } from "mobx-react";
import { RouteComponentProps } from "react-router";
import { STORE_ACTIVITY, STORE_ROUTER } from "../constants";
import { ActivityStore } from "../stores/ActivityStore";
import { Activity } from "../models/Activity";

export interface ActivityContainerProps extends RouteComponentProps<any> {
  [STORE_ACTIVITY]: ActivityStore;
}
export interface ActivityContainerState {}

@inject(STORE_ACTIVITY, STORE_ROUTER)
@observer
export class ActivityContainer extends React.Component<
  ActivityContainerProps,
  ActivityContainerState
> {
  componentDidMount() {
    const activityStore = this.props[STORE_ACTIVITY];
    const contractAddress = "0x2a0c0DBEcC7E4D658f48E01e3fA353F44050c208";
    setTimeout(() => {
      activityStore.push(
        new Activity(contractAddress, "hash", "from", "to", 10.34234)
      );
      activityStore.push(
        new Activity(contractAddress, "hash", "from", "to", 10.34234)
      );
      activityStore.push(
        new Activity(contractAddress, "hash", "from", "to", 10.34234)
      );
    }, 1000);
  }
  render() {
    const activityStore = this.props[STORE_ACTIVITY];
    return (
      <div>
        <h2>Activities</h2>
        <h3>Number of Activities</h3>
        <p>{activityStore.activities.length}</p>
        {activityStore.activities.length > 0 && (
          <table>
            <tr>
              <th>contract</th>
              <th>amount</th>
              <th>from</th>
              <th>to</th>
              <th>hash</th>
            </tr>
            {activityStore.activities.map(activity => (
              <tr>
                <td>{activity.contractAddress}</td>
                <td>{activity.amount}</td>
                <td>{activity.from}</td>
                <td>{activity.to}</td>
                <td>{activity.txHash}</td>
              </tr>
            ))}
          </table>
        )}
      </div>
    );
  }
}
