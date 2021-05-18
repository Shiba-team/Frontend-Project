import React, { Component } from "react";
import CrudButton from "./CrudButton";

import DataTable from 'react-data-table-component';
import faker from "faker";


import "../mycss.css"
const columns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Bucket Name',
    selector: 'bucketName',
    sortable: true,
  },
  {
    name: 'Last Update',
    selector: 'lastUpdate',
    sortable: true,
  },
];

let listbuckets = [];
    for (let i = 0; i < 10; i++) {
      const bucket = {
        id: i + 1,
        bucketName: faker.company.companyName(),
        lastUpdate: new Date().toString(),
      };
      listbuckets.push(bucket);
    }

class ListBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colNumber: 2,
      buckets: this.props.buckets,
    }
  }

  buildRow = (bucket) =>{
    const id = 'row_'+bucket.id;
    return (
      <tr id = {id} key={id}>
      <td> {bucket.id} </td> 
      <td> {bucket.bucketName}</td> 
      <td className="row"> <div className="col-10 my-auto">{bucket.lastUpdate}</div> <div className="col-2 my-auto">{this.addDeleteButton(bucket.id)}</div></td>
      </tr>
    )
  }

  addDeleteButton = (id) =>{
    if (this.props.showDelete===true)
    return (
      <button type="button" className="btn btn-danger alignButton" onClick={()=> this.props.deleteRow(id)}><i class="fa fa-trash"></i></button>)
    else return;
  }

  addApplyButton = () => {
    if (this.props.showDelete===true)
    return (
      <button type="button" className="btn btn-success" onClick={this.props.applyDeleteAction}>Apply Changes</button>)
    else return;
  }

  render() {
    const bucket = this.state.buckets;
    return (
      <div className="col-8">
        <CrudButton open={this.props.open} showDeleteAction={this.props.showDeleteAction} hideDeleteAction={this.props.hideDeleteAction} showDelete = {this.props.showDelete}/>
          
        <DataTable data={bucket} columns={columns} noHeader={true} striped={true} />
          
        <div className="row pt-3" style={{height: 50}}>
        <div className="col-10"></div>
        
        <div className="col-2">{this.addApplyButton()}
        </div> 
        </div>
      </div>
    );
  }
}
export default ListBucket;
