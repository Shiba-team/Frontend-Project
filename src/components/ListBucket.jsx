import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { routeConfigs } from "../constants/routeConfigs";

import CrudButton from "./CrudButton";

class ListBucket extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-8">
        <CrudButton open={this.props.open} />
        <div>
          <table id="sort" className="table table-hover w-100 table-bordered">
            <thead>
              <tr className="bg-secondary text-white">
                <th> ID </th> <th> Bucket Name </th> <th> Last Update </th>
              </tr>
            </thead>
            <tbody id="actor_container">
              {[1, 2, 3].map((item) => (
                <tr
                  key={item}
                  onClick={() =>
                    this.props.history.push(routeConfigs.detailBucket.path)
                  }
                >
                  <td>{item}</td> <td>Bucket {item}</td> <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withRouter(ListBucket);
