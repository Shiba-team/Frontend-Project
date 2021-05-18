import React, { Component } from "react";
import CrudButton from "./CrudButton";

import DataTable from 'react-data-table-component';

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



class ListBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colNumber: 2,
    }
  }

  

  render() {
    let bucket = this.props.buckets;
    console.log(bucket);
    return (
      <div className="col-8">
        <CrudButton open={this.props.open} showDeleteAction={this.props.showDeleteAction} hideDeleteAction={this.props.hideDeleteAction} showDelete = {this.props.showDelete}/>
          
        <DataTable data={bucket} columns={columns} noHeader={true} striped={true}/>
          
        <div className="row pt-3" style={{height: 50}}>
        <div className="col-10"></div>

        </div> 
        </div>
    );
  }
}
export default ListBucket;
