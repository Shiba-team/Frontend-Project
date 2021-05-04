import React, { Component } from "react";
import CrudButton from "./CrudButton";
import faker from "faker";

class ListBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buckets: [],
    }
    
  }

  componentDidMount(){
    let listbuckets = this.state.buckets;
    for (let i = 0; i < 25; i++)
    {
      const bucket = {
        id: i+1,
        bucketName: faker.company.companyName(),
        lastUpdate: new Date().toString(),
      }
      listbuckets.push(bucket);
    }
    this.setState({
      buckets: listbuckets,
    })
  }

  buildRow = (bucket) =>{
    return (
      <tr>
      <td> {bucket.id} </td> 
      <td> {bucket.bucketName}</td> 
      <td> {bucket.lastUpdate} </td>
      </tr>
    )
  }

  render() {
    return (
      <div className="col-8">
        <CrudButton open={this.props.open} />
        <div>
          <table id="sort" className="table table-hover w-100" >
            <thead>
              <tr className="bg-info text-white">
                <th> ID </th> <th> Bucket Name </th> <th> Last Update </th>
              </tr>
            </thead>
            <tbody id="actor">
            {
              this.state.buckets.map((bucket) => {
                return this.buildRow(bucket)
              })
            }
            </tbody>
          </table>
          <table id="sort2"
                              className="table table-hover w-100"
                            >
                              <thead>
                                <tr className="bg-info text-white">
                                  <th> Username </th> <th> Object </th>
                                  <th> Object Permissions </th>
                                </tr>
                              </thead>
                              <tbody id="actor_container">
                                {
                                  this.state.users.map((user, id) => {
                                    return this.buildRow(user,id);
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
