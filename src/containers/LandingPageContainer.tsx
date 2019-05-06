import * as React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button
} from "react-bootstrap";
import { inject, observer } from "mobx-react";
import { RouteComponentProps } from "react-router";
import { STORE_ROUTER, STORE_DASHBOARD } from "../constants";
import { LandingPageStore } from "../stores/LandingPageStore";
import "../styles/landing.scss";

export interface LandingPageContainerProps extends RouteComponentProps<any> {
  [STORE_DASHBOARD]: LandingPageStore;
}
export interface LandingPageContainerState {
  contractAddress: string;
}

@inject(STORE_DASHBOARD, STORE_ROUTER)
@observer
export class LandingPageContainer extends React.Component<
  LandingPageContainerProps,
  LandingPageContainerState
> {
  constructor(props: LandingPageContainerProps) {
    super(props);

    this.setState({
      contractAddress: ""
    });
  }
  handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      contractAddress: e.target.value
    });
  };
  render() {
    const dashboardStore = this.props[STORE_DASHBOARD];
    return (
      <div>
        <div className="top-bg-wrapper">
          <div
            className="top-bg"
            style={{ backgroundImage: "url('img/top-bg.svg')" }}
          />
        </div>
        <div className="container container-nav">
          <div className="row">
            <nav className="navbar">
              <a className="navbar-brand" href="#">
                <h1 className="text-white" style={{ fontWeight: 900 }}>
                  DE-FAKER
                </h1>
              </a>
            </nav>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm d-flex align-items-center top-content-wrapper">
              <div className="top-content text-white">
                <h1>
                  Trust in a
                  <br />
                  Trustless World
                </h1>
                <p className="top-desc">
                  Search for smart contracts to gain trust.
                </p>
                <div className="input-group input-group-md email-subscribe">
                  <input
                    type="text"
                    placeholder="Contract Address"
                    className="form-control input-email"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={this.handleSearchInputChange}
                  />
                  <button
                    className="btn btn-md point-bg btn-subscribe"
                    onClick={() => {
                      this.props.history.push(
                        `/c/${this.state.contractAddress}`
                      );
                    }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm" style={{ textAlign: "center" }}>
              <div className="top-phone">
                <img
                  src="img/phone3.png"
                  alt="Launch Page"
                  className="top-launch"
                />
                <img
                  src="img/phone2.png"
                  alt="Reserved Wallet Page"
                  className="top-reserved-wallet"
                />
                <img
                  src="img/phone1.png"
                  alt="D/W Wallet Page"
                  className="top-dw-wallet"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container container-features">
          <div className="row">
            <div className="col-12">
              <img
                src="img/info-img.png"
                alt="info image"
                className="img-fluid info-img"
              />
              <h2 className="feature-title blue-title">
                The Next Generation <br className="d-block d-sm-none" />
                Cryptocurrency Wallet
              </h2>
              <p>
                DE-FAKER is a wallet to send, receive, and safely store your
                digital assets.
                <br className="d-none d-sm-block" />
                Your funds are fully secured from unauthorized access with
                multi-sig, SSL encryption and 2FA.
              </p>
              <p>
                You can choose between instant D/W wallet(with no interest) and
                reserved wallet
                <br className="d-none d-sm-block" />
                that pays interest on the digital assets you store.
              </p>
              <div className="vertical-line" />
              <h2 className="blue-title">
                Easily Access.&nbsp;
                <br className="d-block d-sm-none" />
                See at a Glance.&nbsp;
                <br className="d-block d-sm-none" />
                Completely Safe.&nbsp;
              </h2>
              <div className="row">
                <div className="col-sm">
                  <img
                    src="img/dashboard-icon.svg"
                    alt="dashboard"
                    className="img-fluid feature-img dashboard"
                  />
                  <h3 className="feature-title">Convenient Dashboard</h3>
                  <p className="feature-desc">
                    Utilizing dashboard with live chart,
                    <br />
                    you can track the value of your digital asset
                    <br />
                    portfolio in real-time.
                  </p>
                </div>
                <div className="col-sm">
                  <img
                    src="img/multi-asset-icon.svg"
                    alt="dashboard"
                    className="img-fluid feature-img dashboard"
                  />
                  <h3 className="feature-title">Multi-Asset Wallet</h3>
                  <p className="feature-desc">
                    Through multi-asset support wallet,
                    <br />
                    You can easily manage your digital
                    <br />
                    wealth at one place.
                  </p>
                </div>
                <div className="col-sm">
                  <img
                    src="img/watch-only-icon.svg"
                    alt="dashboard"
                    className="img-fluid feature-img dashboard"
                  />
                  <h3 className="feature-title">Watch-Only Mode</h3>
                  <p className="feature-desc">
                    ‘Watch-only’ mode allows you to check
                    <br />
                    your balance without compromising
                    <br />
                    security or privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-dw-wallet">
          <div className="row">
            <div className="col-md-7">
              <img
                src="img/dw-wallet.png"
                alt="dw wallet"
                className="img-fluid big-image"
              />
            </div>
            <div className="col-md-5 d-flex flex-column justify-content-center">
              <h2 className="blue-title">Instant D/W Wallet</h2>
              <p className="subtitle">
                Instant D/W wallet is for simple,
                <br />
                secure and convenient storing of
                <br className="d-block d-sm-none" />
                your digital assets.
              </p>
              <div className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center check-content">
                  <img
                    src="img/check-icon.svg"
                    alt="check icon"
                    className="check"
                  />
                  <p className="no-mb">
                    Instant deposit and withdrawal of your digital assets is
                    available anytime without confirmation delays.
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center check-content">
                  <img
                    src="img/check-icon.svg"
                    alt="check icon"
                    className="check"
                  />
                  <p className="no-mb">
                    Transactions between users within DE-FAKER service is free
                    of charge. Only a minor fee is charged for transactions out
                    of DE-FAKER wallet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-reserved-wallet">
          <div className="row">
            <div className="col-md-7 order-md-2">
              <img
                src="img/reserved-wallet.png"
                alt="dw wallet"
                className="img-fluid big-image"
              />
            </div>
            <div className="col-md-5 order-md-1 d-flex flex-column justify-content-center">
              <h2 className="blue-title">Reserved Wallet</h2>
              <p className="subtitle">
                You earn interest by just setting aside and
                <br />
                storing your assets in the reserved wallet!
              </p>
              <div className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center check-content">
                  <img
                    src="img/check-icon.svg"
                    alt="check icon"
                    className="check"
                  />
                  <p className="no-mb">
                    Reserved period can be freely set from 7 days to a month
                    depending on the preference and the interest rate will be
                    set accordingly.
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center check-content">
                  <img
                    src="img/check-icon.svg"
                    alt="check icon"
                    className="check"
                  />
                  <p className="no-mb">
                    Assets in the reserved wallets are transparently disclosed
                    to the public through proof of the reserves audit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-trust">
          <div className="row">
            <div className="col-md-6">
              <img
                src="img/illustration.svg"
                alt="trust"
                className="img-fluid big-image"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2 className="blue-title">Trustworthy Service</h2>
              <p className="subtitle">
                DE-FAKER reserved wallet service is a safe way
                <br />
                of investing your idle assets.
              </p>
              <div className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center check-content">
                  <img
                    src="img/check-icon.svg"
                    alt="check icon"
                    className="check"
                  />
                  <p className="no-mb">
                    The assets in the reserved wallet will be managed through
                    arbitrage between exchanges by carefully designed
                    autotrader. The profit will be given back to the users in
                    the form of interest.
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center check-content">
                  <img
                    src="img/check-icon.svg"
                    alt="check icon"
                    className="check"
                  />
                  <p className="no-mb">
                    Managed assets and the profit will be transparently
                    disclosed to the public on a daily basis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid ready">
          <div className="row">
            <div className="col">
              <div className="ready-box">
                <h1>Ready to get started?</h1>
                <p className="subtitle">Subscribe and meet DE-FAKER fastest</p>
                <div className="input-group input-group-lg email-subscribe">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control input-email"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                  <button className="btn btn-lg btn-subscribe point-bg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="container-fluid">
          <div className="row horizontal-devider" />
          <div className="row">
            <div className="col">
              <div className="logo-box">
                <img
                  src="img/logo-light.svg"
                  alt="DE-FAKER Logo"
                  className="logo-footer"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
