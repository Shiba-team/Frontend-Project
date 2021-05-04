import React from "react";
import { FormControl } from "react-bootstrap";

class Permission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: ["nghilh"],
      text: "",
    };
  }

  render() {
    let { listUser, text } = this.state;

    return (
      <div className="permission">
        <div className="title-section">Public access</div>

        <table className="w-100">
          <thead>
            <tr className="">
              <th> </th>
              <th> Read object </th>
              <th> Read object permission </th>
              <th>Write object permission</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <input type="radio" className="mr-2" />
                  Everyone
                </div>
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-5 mb-3">
          <div className="mb-1">Access for others account:</div>
          <div className="d-flex w-50">
            <FormControl
              value={text}
              placeholder="username"
              onChange={(e) => this.setState({ text: e.target.value })}
            />
            <button
              className="btn btn-primary ml-2"
              onClick={() =>
                this.setState({ listUser: [...listUser, text], text: "" })
              }
            >
              Add
            </button>
          </div>
        </div>

        <table className="w-100">
          <thead>
            <tr className="">
              <th>Account</th>
              <th>Read object</th>
              <th>Read object permission </th>
              <th>Write object permission</th>
            </tr>
          </thead>
          <tbody>
            {listUser.map((item) => (
              <tr key={item}>
                <td>{item}</td>

                <td>
                  <input type="checkbox" />
                </td>

                <td>
                  <input type="checkbox" />
                </td>

                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-flex">
          <button className="btn btn-primary mt-3 ml-auto">Save</button>
        </div>
      </div>
    );
  }
}

export default Permission;
