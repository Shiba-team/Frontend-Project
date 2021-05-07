import React, { Component } from "react";
import CrudButton from "./CrudButton";
import faker from "faker";


import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

import "../mycss.css"

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
    $(document).ready(function () {
      $("#sort").DataTable({
        "pagingType": "numbers",
        scrollX: '100%',
        scrollY: "300px",
        iDisplayLength: 6,
        info: false,
        dom:
          '<"top">rt<"bottom"<"row"<"col-3 mt-1 pull-left"f><"col-9"p>>><"clear">',
      });
    });
  }

  buildRow = (bucket) =>{
    return (
      <tr>
      <td> {bucket.id} </td> 
      <td> {bucket.bucketName}</td> 
      <td> {bucket.lastUpdate} </td>
      {this.addDeleteButton()}
      </tr>
    )
  }

  addDeleteCol = () =>{
    return (<th>

    </th>)
  }

  addDeleteButton = () =>{
    return (<td>
      <button type="button" class="btn btn-danger"><i class="fa fa-trash"></i></button>
    </td>)
  }

  render() {
    return (
      <div className="col-8">
        <CrudButton open={this.props.open} />
        <div>
          <table id="sort" className="table table-hover w-100" >
            <thead>
              <tr className="bg-info text-white">
                <th> ID </th> <th> Bucket Name </th> <th> Last Update </th> {this.addDeleteCol()}
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
        </div>
      </div>
    );
  }
}
export default ListBucket;
