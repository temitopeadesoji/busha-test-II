import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th colSpan="3">
                <select className="txnType form-control">
                  <option>New transfer</option>
                  <option>Old transfer</option>
                  <option>All transfer</option>
                </select>
              </th>
            </tr>
            <tr>
              <th className="big">Reference</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3" className="empty big">
                <span className="main">You haven’t made any transfers yet</span>
                <span>Your transfers will be displayed here.</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
