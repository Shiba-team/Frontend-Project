import React from "react";
import { withRouter } from "react-router-dom";

import { routeConfigs } from "../../constants/routeConfigs";

import { Tabs, Tab } from "react-bootstrap";
import Permission from "./Permission";
import Properties from "./Properties";

class DetailBucket extends React.Component {
  render() {
    return (
      <div className="container pt-4">
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Overview">
            <div className="d-flex mt-4 mb-4">
              <a
                href={routeConfigs.upload.path}
                className="btn btn-primary pl-3 pr-3"
              >
                <i className="fa fa-upload mr-2"> </i>Upload
              </a>

              <a href="#" className="btn btn-danger pl-3 pr-3 ml-3">
                <i className="fa fa-trash mr-2"> </i>Delete
              </a>
            </div>

            <table id="sort" className="table table-hover w-100 table-bordered">
              <thead>
                <tr className="bg-secondary text-white">
                  <th> Name </th> <th> Last Modified </th> <th> Size </th>
                </tr>
              </thead>
              <tbody id="actor_container">
                {[1, 2, 3].map((item) => (
                  <tr key={item}>
                    <td>{item}</td> <td>Bucket {item}</td> <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="properties" title="Properties">
            <Properties />
          </Tab>
          <Tab eventKey="permission" title="Permission">
            <Permission />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default withRouter(DetailBucket);
