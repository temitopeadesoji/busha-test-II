import React, { Component } from "react";
import { ReactComponent as NairaIcon } from "./imgs/iconnaira.svg";
import { ReactComponent as BitcoinIcon } from "./imgs/iconbitcoin.svg";
import { ReactComponent as EtheriumIcon } from "./imgs/iconetherium.svg";

class App extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th className="big">Name</th>
              <th>Pending</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="big main">
                <BitcoinIcon />
                <span>Bitcoin</span>
              </td>
              <td>
                <span className="main">10.12345678 BTC</span>
                <span>2,000,000 NGN</span>
              </td>
              <td>
                <span className="main">10.12345678 ETH</span>
                <span>2,000,000 NGN</span>
              </td>
            </tr>
            <tr>
              <td className="big main">
                <EtheriumIcon />
                <span>Etherium</span>
              </td>
              <td>
                <span className="main">10.12345678 ETH</span>
                <span>2,000,000 NGN</span>
              </td>
              <td>
                <span className="main">10.12345678 ETH</span>
                <span>2,000,000 NGN</span>
              </td>
            </tr>
            <tr>
              <td className="big main">
                <NairaIcon />
                <span>Naira</span>
              </td>
              <td>
                <span className="main">NGN 800,000</span>
              </td>
              <td>
                <span className="main">NGN 2,000,000</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
