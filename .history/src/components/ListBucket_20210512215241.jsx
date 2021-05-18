import React, { Component } from "react";
import CrudButton from "./CrudButton";

import {MDBDataTable} from "mdbreact";
import faker from "faker";


import "../mycss.css"

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
    const data = {
      columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Bucket Name',
        field: 'bucketName',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Last Update',
        field: 'lastUpdate',
        sort: 'asc',
        width: 270
      },
    ],
    rows: this.state.buckets
    };
    return (
      <div className="col-8">
        <CrudButton open={this.props.open} showDeleteAction={this.props.showDeleteAction} hideDeleteAction={this.props.hideDeleteAction} showDelete = {this.props.showDelete}/>
          
        <MDBDataTable data={data} striped info={false} entries={6} displayEntries={false} noBottomColumns theadColor="indigo" theadTextWhite>
        </MDBDataTable>
          
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
