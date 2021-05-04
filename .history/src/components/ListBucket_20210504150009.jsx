import React, { Component } from "react";
import CrudButton from "./CrudButton";
import faker from "faker";

class ListBucket extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-8">
        <CrudButton open={this.props.open} />
        <div>
          <table id="sort" className="table table-hover w-100">
            <thead>
              <tr className="bg-info text-white">
                <th> ID </th> <th> Bucket Name </th> <th> Last Update </th>
              </tr>
            </thead>
            <tbody id="actor_container">
              <tr>
                <td> </td> <td> </td> <td> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ListBucket;
