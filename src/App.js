import React, { Component, useState } from "react";
import { ReactComponent as DashboardIcon } from "./imgs/icondashboard.svg";
import { ReactComponent as BalanceIcon } from "./imgs/iconbalances.svg";
import { ReactComponent as NotificationIcon } from "./imgs/iconnotification.svg";
import { ReactComponent as AllIcon } from "./imgs/iconall.svg";
import { ReactComponent as TransactionIcon } from "./imgs/icontransaction.svg";
import AcceptPayment from "./imgs/acceptpayment.png";
import "./App.css";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";

// Component for routing
import BalancePage from "./Balances";
import TransferPage from "./Transfers";
import ErrorPage from "./Error";

const AppContent = () => {
  // let pageAppMode = ;
  const [pageTitle, setPageTitle] = useState("Dashboard");
  const [pageAppMode, setPageAppMode] = useState("Test Mode");
  const onRouteChange = payload => setPageTitle(payload);
  const changeAppMode = event => {
    if (event.target.checked) {
      setPageAppMode("Test Mode");
    } else {
      setPageAppMode("Live Mode");
    }
  };
  return (
    <div>
      <div className="appHeader">
        <div className="pageTitle">
          <h4>{pageTitle}</h4>
        </div>
        <div className="headerRight">
          <div className="appMode">
            <label className="switch">
              <input type="checkbox" defaultChecked onChange={changeAppMode} />
              <span className="slider round"></span>
            </label>
            <span className="modeTitle">{pageAppMode}</span>
          </div>
          <div className="appNotification">
            <NotificationIcon />
            <div className="oval">1</div>
          </div>
          <div className="appUser">
            <div className="userPicture">
              <span>O</span>
            </div>
            <h4 className="userName">Oluwatobiloba Mayowa</h4>
          </div>
        </div>
      </div>
      <div className="appContent">
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return <Redirect to="/home" />;
            }}
          />
          <Route
            path="/home"
            exact
            render={() => {
              onRouteChange("Dashboard");
              return (
                <div>
                  <h1 className="App-title">
                    Welcome to your Dashboard Busha,
                  </h1>
                </div>
              );
            }}
          />
          <Route
            path="/balances"
            render={() => {
              onRouteChange("Balances");
              return <BalancePage />;
            }}
          />
          <Route
            path="/transfers"
            render={() => {
              onRouteChange("Transfers");
              return <TransferPage />;
            }}
          />
          <Route
            path="/payments"
            render={() => {
              onRouteChange("Payments");
              return (
                <div>
                  <h1 className="App-title">Payments Page,</h1>
                </div>
              );
            }}
          />
          <Route
            path="/developers"
            render={() => {
              onRouteChange("Developers");
              return (
                <div>
                  <h1 className="App-title">Developers Page,</h1>
                </div>
              );
            }}
          />
          <Route
            path="/settings"
            render={() => {
              onRouteChange("Settings");
              return (
                <div>
                  <h1 className="App-title">Settings Page,</h1>
                </div>
              );
            }}
          />
          <Route
            render={() => {
              onRouteChange("Error");
              return <ErrorPage />;
            }}
          />
        </Switch>
      </div>
    </div>
  );
};

const AppSideBar = () => {
  return (
    <div className="content">
      <div className="sideHeader">
        <div className="companyLogo">
          <p>B</p>
        </div>
        <select className="companyName form-control">
          <option>Business name</option>
          <option>Business name I</option>
          <option>Business name II</option>
        </select>
      </div>
      <div className="sideMenu">
        <ul>
          <li>
            <NavLink to="/home">
              <DashboardIcon />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/balances">
              <BalanceIcon />
              <span>Balances</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/payments">
              <AllIcon />
              <span>Payments</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/transfers">
              <TransactionIcon />
              <span>Transfers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/developers">
              <AllIcon />
              <span>Developers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings">
              <AllIcon />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <button className="acceptPayment">
        <img src={AcceptPayment} alt="accept payment" />
        Accept Payment
      </button>
    </div>
  );
};

class App extends Component {
  render() {
    this.pageTitle = "Dashboards";

    return (
      <div className="App">
        {/*after end of header*/}
        <div className="sideBar">
          <AppSideBar />
        </div>
        <div className="appBody">
          <div className="content">
            <AppContent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
