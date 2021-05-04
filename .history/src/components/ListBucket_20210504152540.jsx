import React, { Component } from "react";
import CrudButton from "./CrudButton";
import faker from "faker";

class ListBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }
  buildFaker = () =>{
    for (let i = 0; i < 25; i++)
    {
      const user = {
        id: i,
        bucketName: faker.company.companyName,
        lastUpdate: faker.datatype.datetime,
      }
      this.state.users.push(user);
    }
  }

  buildRow = (user) =>{
    return (
      <tr>
      <td> {user.id} </td> 
      <td> {user.bucketName}</td> 
      <td> {user.lastUpdate} </td>
      </tr>
    )
  }

  render() {
    return (
      <div className="col-8" onLoad={this.buildFaker}>
        <CrudButton open={this.props.open} />
        <div>
          <table id="sort" className="table table-hover w-100" >
            <thead>
              <tr className="bg-info text-white">
                <th> ID </th> <th> Bucket Name </th> <th> Last Update </th>
              </tr>
            </thead>
            <tbody id="actor_container">
            {
              this.state.users.map(function(user) {
                return this.buildRow(user)
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ListBucket;
