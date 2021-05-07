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
      showDelete: false,
      colNumber: 2,
    }
  }

  showDeleteAction = () => {
    this.setState({
      showDelete:true
    })
  }

  hideDeleteAction = () => {
    this.setState({
      showDelete: false
    })
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
        scrollY: "350px",
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
      <td class="row"> <div class="col-10">{bucket.lastUpdate}</div> <div class="col-2">{this.addDeleteButton()}</div></td>
      </tr>
    )
  }

  addDeleteButton = () =>{
    if (this.state.showDelete===true)
    return (
      <button type="button" class="btn btn-danger alignButton"><i class="fa fa-trash"></i></button>)
    else return;
  }

  render() {
    return (
      <div className="col-8">
        <CrudButton open={this.props.open} showDeleteAction={this.showDeleteAction} hideDeleteAction={this.hideDeleteAction} showDelete = {this.state.showDelete}/>
        <div>
          <table id="sort" className="table table-hover w-100" >
            <thead>
              <tr className="bg-info text-white">
                <th> ID </th> <th> Bucket Name </th> <th> Last Update </th>}
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
