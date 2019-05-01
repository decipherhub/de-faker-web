import * as React from "react";
import { inject, observer } from "mobx-react";
import { RouteComponentProps } from "react-router";
import { STORE_ROUTER, STORE_ACTIVE_USER } from "../../constants";
import { ActiveUserStore } from "../../stores/ActiveUserStore";
import { ActiveUser } from "../../models/ActiveUser";

export interface ActiveUserProps extends RouteComponentProps<any> {
  [STORE_ACTIVE_USER]: ActiveUserStore;
}
export interface ActiveUserState {}

@inject(STORE_ACTIVE_USER, STORE_ROUTER)
@observer
export class ActiveUserContainer extends React.Component<
  ActiveUserProps,
  ActiveUserState
> {
  componentDidMount() {
    const activeUserStore = this.props[STORE_ACTIVE_USER];
    setTimeout(() => {
      const address1 = "0x6A186C3E272Eb4e7Ba3Be5Ec3b99F6f893012A81";
      const address2 = "0x1abE802436FcA592dfdE2a86031b3BD9C2C9d350";
      activeUserStore.push(new ActiveUser(address1));
      activeUserStore.push(new ActiveUser(address2));
    }, 1000);
  }
  render() {
    const activeUserStore = this.props[STORE_ACTIVE_USER];
    return (
      <div>
        <h2>Active Users</h2>
        <h3>Number of Active Users</h3>
        <p>{activeUserStore.activeUsers.length}</p>
        {activeUserStore.activeUsers.length > 0 && (
          <table>
            <tr>
              <th>address</th>
            </tr>
            {activeUserStore.activeUsers.map(au => (
              <tr>
                <td>{au.address}</td>
              </tr>
            ))}
          </table>
        )}
      </div>
    );
  }
}
