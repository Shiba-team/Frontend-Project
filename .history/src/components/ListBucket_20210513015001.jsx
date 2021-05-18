import React, { Component } from "react";
import CrudButton from "./CrudButton";
import {MDBDataTableV5} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';

import "../mycss.css"

class ListBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colNumber: 2,
    }
  }

  addDeleteButton = (id) =>{
    if (this.props.showDelete===true)
    return (
      <button type="button" className="btn btn-danger" onClick={()=> this.props.deleteRow(id)}><i class="fa fa-trash"></i></button>)
    else return;
  }

  addApplyButton = () => {
    if (this.props.showDelete===true)
    return (
      <button type="button" className="btn btn-success" onClick={this.props.applyDeleteAction}>Apply Changes</button>)
    else return;
  }



  render() {
    let listBucket = [];
    let buckets = this.props.buckets;
      for (let i = 0; i < buckets.length; i++){
        let bucket = {
          id: buckets[i].id,
          bucketName: <div className="row my-auto">{buckets[i].bucketName}</div>,
          lastUpdate: (<div className="row"><div className="col-10 my-auto" >{buckets[i].lastUpdate}</div> <div className="col-2 my-auto">{this.addDeleteButton(buckets[i].id)}</div></div>),
        }
        listBucket.push(bucket);
      }
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
    rows: listBucket,
    };
    return (
      <div className="col-8">
        <CrudButton open={this.props.open} showDeleteAction={this.props.showDeleteAction} hideDeleteAction={this.props.hideDeleteAction} showDelete = {this.props.showDelete}/>
          
        <MDBDataTableV5 hover data={data} striped info={false} entries={6} displayEntries={false} noBottomColumns materialSearch theadColor="bg-info" theadTextWhite maxHeight="350px" barReverse>
        </MDBDataTableV5>
          
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
